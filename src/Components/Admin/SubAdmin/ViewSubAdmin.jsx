import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ViewSubAdmin.css';
import avatarImg from "../../../assets/icons/avatar.png"
import { SyncLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const ViewSubAdmin = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalReset, setShowModalReset] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [data, setData] = useState(null)
  const [formData, setFormData] = useState({ password: '', });
  const [checkboxes, setCheckboxes] = useState({
    banUnban: false,
    mute: false,
    kick: false,
    screenshot: false,
    agencyBan: false,
    dpApprove: false,
  });
  const admin = localStorage.getItem("Admintoken");
  useEffect(() => {

    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`https://fun2fun.live/admin/subAdminUser/getall`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();

      setData(jsonData.data);
      console.log("Fetched Data:", jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deleteSubAdmin = async (id) => {
    try {
      const response = await fetch(`https://fun2fun.live/admin/remove/subAdminUser/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      fetchData();
      console.log("Fetched Data:", jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSaveChangesReset = async () => {
    setShowModalReset(false);

    try {
      if (selectedUser) {
        const response = await fetch(`https://fun2fun.live/admin/subAdminUser/resetpassword`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: selectedUser?.username,
            newpassword: formData?.password
          }),
        });

        if (response.ok) {
          toast.success("Updated successfully");
          fetchData()
        } else {
          console.error('Failed to update user permissions');
        }
      }
    } catch (error) {
      console.error('Error updating user permissions:', error);
    }
  };

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    const isChecked = e.target.checked;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: isChecked,
    }));
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
                {<img className="images" src={item.images[0] || { avatarImg }} alt='images' />}
              </td>
              {/* <td>{item.userDetails ? item.userDetails[0].name : 'N/A'}</td> */}
              <td>{item.userId || 'N/A'}</td>
              <td>{item.username || 'N/A'}</td>
              {/* <td>{item.userDetails[0]?.email || "N/A"}</td>
              <td>{item.userDetails[0]?.mobile || 'N/A'}</td> */}
              {/* <td>{item.coins || 'N/A'}</td>
              <td>{item.role || "N/A"}</td>
              <td>{item.status || 'N/A'}</td> */}
              {
                !admin ?
                  <td>
                    <a href='#' style={{ textDecoration: "none", color: "green" }} onClick={() => {
                      setSelectedUser(item)
                      setShowModalReset(true)

                    }}>Reset Password</a>
                    <hr />
                    <a href='#' style={{ textDecoration: "none", color: "red" }} onClick={() => deleteSubAdmin(item?._id)}>Remove</a>
                  </td> : ""
              }

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
      <h3>Manage SubAdmin</h3>
      <div className="filter">
        <label>Search</label>
        <input type="text" />

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <button className='search-button'>Search</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            {/* <th>Name</th> */}
            <th>UniqueId</th>
            <th>Username</th>
            {/* <th>Email</th>
            <th> Mobile</th> */}
            {/* <th>Total Coins</th>
            <th>Role</th>
            <th>Status</th> */}

            {
              !admin ? <th>Action</th> : ""
            }

          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
      <Modal show={showModalReset} onHide={() => setShowModalReset(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>{selectedUser?.username}</b><br />
          <label>New Password</label>
          <div >
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formData && formData?.password}
              onChange={handleChange}
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChangesReset}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewSubAdmin;
