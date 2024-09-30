// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import styles from './ManageProblemReport.module.css';

const UserVideoReport = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://yoyo560live.live/user/userReport/getall`);
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

  const tableData = [
    { id: 1, UserName: "Janem", reportUserName: "xyx", report: "qwe", date: "12/65/44", video: "www.hgfff.com" },

  ];


  // const renderTableRows = () => {
  //   return tableData.map((row) => (
  //     <tr key={row.id}>
  //       <td>{row.id}</td>
  //       <td>{row.UserName}</td>
  //       <td>{row.reportUserName}</td>
  //       <td>{row.report}</td>
  //       <td>{row.date}</td>
  //       <td>{row.video}</td>
  //       <td>
  //         <select
  //           // onChange={() => handleUpdateClick(row)}
  //           // value={selectedUser === row ? 'update' : 'action'}
  //         >
  //           <option value="action">Action</option>
  //           <option value="update">Update</option>
  //           <option value="remove">Remove</option>
  //         </select>
  //       </td>
  //     </tr>
  //   ));
  // };

  return (
    <div className={styles.main}>
      <h3>User Video Report</h3>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>User Name</th>
            <th>Report UserName</th>
            <th>Report</th>
            <th>Date/Time</th>
            <th>Video</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* <tbody>{renderTableRows()}</tbody> */}
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

export default UserVideoReport;


