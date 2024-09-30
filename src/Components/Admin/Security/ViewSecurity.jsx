import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './ViewSubAdmin.css';
import avatarImg from "../../../assets/icons/avatar.png"

const ViewSecurity = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [data, setData] = useState(null)
  const [checkboxes, setCheckboxes] = useState({
    banUnban: false,
    mute: false,
    kick: false,
    screenshot: false,
    agencyBan: false,
    dpApprove: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://yoyo560live.live/admin/securityUser/getall`);
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


    fetchData();
  }, []);

  console.log(data, "data")

  const deleteSecurity = async (id) => {
    try {
      const response = await fetch(`https://yoyo560live.live/admin/remove/securityUser/${id}`, {
        method: 'DELETE',
      });
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
  const handleUpdateClick = (user) => {
    setShowModal(true);
    setSelectedUser(user);
    setCheckboxes({
      banUnban: user.banUnban === 'Allowed',
      mute: user.mute === 'Allowed',
      kick: user.kick === 'Allowed',
      screenshot: user.screenshot === 'Allowed',
      agencyBan: user.agencyBan === 'Allowed',
      dpApprove: user.dpApprove === 'Allowed',
    });
  };

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    const isChecked = e.target.checked;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: isChecked,
    }));
  };

  const handleSaveChanges = () => {
    console.log('Selected User:', selectedUser);
    console.log('Updated Checkboxes:', checkboxes);
    setShowModal(false);
  };

  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {<img className="images" src={item.images[0] || { avatarImg }} alt='images' />}
              </td>
              <td>{item.userDetails ? item.userDetails[0].name : 'N/A'}</td>
              <td>{item.userId || 'N/A'}</td>
              <td>{item.userDetails[0]?.email || "N/A"}</td>
              <td>{item.userDetails[0]?.mobile || 'N/A'}</td>
              {/* <td>{item.coins || 'N/A'}</td>
              <td>{item.role || "N/A"}</td>
              <td>{item.status || 'N/A'}</td> */}
              <td>
                <td>
                  <a href='#' style={{ textDecoration: "none", color: "red" }} onClick={() => deleteSecurity(item?._id)}>Remove</a>
                </td>
              </td>
            </tr>
          ))}
        </>
      );
    } else {
      return (
        <tr>
          <td colSpan="8">
            <h2>No data available</h2>
          </td>
        </tr>
      );
    }
  };

  return (
    <div className="main">
      <h3>Manage UF Team</h3>
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
            <th>Name</th>
            <th>UniqueId</th>
            <th>Email</th>
            <th> Mobile</th>
            {/* <th>Total Coins</th>
            <th>Role</th>
            <th>Status</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update UF Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>
            <input
              type="checkbox"
              name="banUnban"
              checked={checkboxes.banUnban}
              onChange={handleCheckboxChange}
            />
            Ban/Unban
          </label>
          <label>
            <input
              type="checkbox"
              name="mute"
              checked={checkboxes.mute}
              onChange={handleCheckboxChange}
            />
            Mute
          </label>
          <label>
            <input
              type="checkbox"
              name="kick"
              checked={checkboxes.kick}
              onChange={handleCheckboxChange}
            />
            Kick
          </label>
          <label>
            <input
              type="checkbox"
              name="screenshot"
              checked={checkboxes.screenshot}
              onChange={handleCheckboxChange}
            />
            ScreentShot & Recording
          </label>
          <label>
            <input
              type="checkbox"
              name="agencyBan"
              checked={checkboxes.agencyBan}
              onChange={handleCheckboxChange}
            />
            Agency Ban
          </label>
          <label>
            <input
              type="checkbox"
              name="dpApprove"
              checked={checkboxes.dpApprove}
              onChange={handleCheckboxChange}
            />
            DP Approve
          </label>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewSecurity;
