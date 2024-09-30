import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ViewAdmin.css';
import { SyncLoader } from 'react-spinners';

const ViewCoinSeller = () => {
  const [data, setData] = useState(null)
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState("action");
  const [checkboxes, setCheckboxes] = useState({
    banUnban: false,
    mute: false,
    kick: false,
    screenshot: false,
    agencyBan: false,
    dpApprove: false,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`https://yoyo560live.live/admin/coinSeller/getall`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      const modifiedData = jsonData.data.map((item) => ({
        ...item,
        selectedAction: "action",
      }));
      setData(modifiedData);
      console.log("Fetched Data:", modifiedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data, "data")


  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    const isChecked = e.target.checked;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: isChecked,
    }));
  };

  const handleSaveChanges = async () => {
    console.log('Selected User:', selectedUser);
    console.log('Updated Checkboxes:', checkboxes);
    setShowModal(false);

    try {
      if (selectedUser) {
        const response = await fetch(`https://yoyo560live.live/admin/coinSeller/update/${selectedUser.userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            is_ban_unban: checkboxes.banUnban,
            mute: checkboxes.mute,
            kick: checkboxes.kick,
            screenshot: checkboxes.screenshot,
            agencyban: checkboxes.agencyBan,
            dpapprove: checkboxes.dpApprove,
          }),
        });

        if (response.ok) {
          toast.success('User permissions updated successfully');
          fetchData()
          setSelectedAction("action");
        } else {
          console.error('Failed to update user permissions');
        }
      }
    } catch (error) {
      console.error('Error updating user permissions:', error);
    }
  };


  const handleDeleteUser = (userId) => {
    setSelectedUser(userId); // Store the userId to delete
    setShowDeleteModal(true); // Open the delete modal
  };

  const confirmDelete = async (id) => {
    try {
      const response = await fetch(
        `https://yoyo560live.live/admin/coinSeller/delete/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        toast.success('User removed successfully');
        setData((prevData) => prevData.filter((user) => user.userId !== selectedUser));
        fetchData();
      } else {
        console.error('Failed to remove user');
        const errorResponse = await response.json();
        console.error('Error Response:', errorResponse);
      }
    } catch (error) {
      console.error('Error removing user:', error);
    } finally {
      setShowDeleteModal(false); // Close the delete modal
    }
  };

  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {item.images[0] && (
                  <img className="images" src={item.images[0]} alt='images' />
                )}
              </td>
              <td>{item ? item?.userId || "N/A" : "N/A"}</td>
              <td>{item ? item?.seller_name || "N/A" : "N/A"}</td>
              <td>{item ? item?.email || "N/A" : "N/A"}</td>
              <td>{item?.totalCoins}</td>

              <td>
                <td><Button variant='danger' onClick={() => confirmDelete(item?.userId)}>Remove</Button></td>
              </td>
            </tr>
          ))}
        </>
      );
    } else {
      return (
        <tr>
          <td colSpan="8">
            <h2><SyncLoader color="#f403fc" /></h2>
          </td>
        </tr>
      );
    }
  };

  return (
    <div className="main">
      <h3>View Coin Seller</h3>
      <div className="filter">
        <label>Search</label>
        <input type="text" />

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <button className='view-admin-search'>Search</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>UserId</th>
            <th>Seller Name</th>
            <th>email</th>
            <th>Total Diamonds</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


    </div>
  );
};

export default ViewCoinSeller;
