// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
import style from './OfflineRechargeHistory.module.css';

const OfflineRechargeHistory = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [checkboxes, setCheckboxes] = useState({
//     banUnban: false,
//     mute: false,
//     kick: false,
//     screenshot: false,
//     agencyBan: false,
//     dpApprove: false,
//   });

  const tableData = [
    { id: 1, image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", username: 'User 1', sender: "Master Admin", Name: 'James', PaymentId: 'qwetr6544fg', price: "45", coin: "344444", datetime: "2023-03-28 05-08-18" },
    { id: 1, image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png", username: 'User 1', sender: "Master Admin", Name: 'James', PaymentId: 'qwetr6544fg', price: "45", coin: "344444", datetime: "2023-03-28 05-08-18" },

  ];

//   const handleUpdateClick = (user) => {
//     setShowModal(true);
//     setSelectedUser(user);
//     setCheckboxes({
//       banUnban: user.banUnban === 'Allowed',
//       mute: user.mute === 'Allowed',
//       kick: user.kick === 'Allowed',
//       screenshot: user.screenshot === 'Allowed',
//       agencyBan: user.agencyBan === 'Allowed',
//       dpApprove: user.dpApprove === 'Allowed',
//     });
//   };


  
  const renderTableRows = () => {
    return tableData.map((row) => (
      <tr key={row.id}>
        <td>{row.id}</td>
        <td><img className={style.images} src={row.image} alt='images' /></td>
        <td>{row.username}</td>
        <td>{row.sender}</td>
        <td>{row.Name}</td>
        <td>{row.PaymentId}</td>
        <td>{row.price}</td>
        <td>{row.coin}</td>
        <td>{row.datetime}</td>
        <td>
        <button className={style.undo_btn}>Undo</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className={style.main}>
      <h3>Offline Recharge History</h3>
      <div className={style.filter}>
        <label>Search</label>
        <input type="text" />

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <button className={style.search_button}>Search</button>
      </div>

      <table className={style.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Username</th>
            <th>Sender</th>
            <th>Name</th>
            <th>PAyment Id</th>
            <th>Price</th>
            <th>Coin</th>
            <th>Date/Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


      {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
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
      </Modal> */}
    </div>
  );
};

export default OfflineRechargeHistory;
