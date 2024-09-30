import React, { useState, useEffect } from 'react';
import "./ViewAgency.css";
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { SyncLoader } from "react-spinners";
const ViewAgency = () => {
  const [data, setData] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const navigate = useNavigate()
  const [userId, setUserId] = useState('');
  const [editedData, setEditedData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const admin = localStorage.getItem("Admintoken");
  const subAdmin = localStorage.getItem("SubAdmintoken");
  const admin1 = localStorage.getItem("AdminLoginData");
  let adminUser = JSON.parse(admin1)
  const fetchData = async () => {
    try {
      const response = await fetch(`https://yoyo560live.live/admin/agency/getall`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log("Fetched Data:", jsonData.data);

      if (jsonData.data && jsonData.data[selectedItem]) {
        setUserId(jsonData.data[selectedItem].userId);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData1 = async () => {
    try {

      const response = await fetch(`https://yoyo560live.live/admin/agency/getbyadmin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ admin: adminUser?.userId }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.data);
      console.log("Fetched Data:", jsonData.data);

      if (jsonData.data && jsonData.data[selectedItem]) {
        setUserId(jsonData.data[selectedItem].userId);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if (admin) {
      fetchData1();
    } else {
      fetchData();
    }
  }, []);



  //Dropdown chgange
  const handleDropdownChange = (index, action) => {
    switch (action) {
      case "update":
        setShowEditModal(true);
        setEditedData(data[index]);
        break;
      case "remove":
        setShowRemoveModal(true);
        setEditedData(data[index]);
        break;
      default:
        break;
    }
  }


  // Delete 
  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`https://yoyo560live.live/admin/agency/delete`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: editedData?.userId }),
        }
      );

      if (!response.ok) {
        throw new Error("Network problem");
      }

      const updatedData = [...data];
      updatedData.splice(selectedItem, 1);
      fetchData();

      setShowRemoveModal(false);
    } catch (error) {
      console.error("Error deleting data:", error);
    }

  }

  //Update
  const handleUpdateSubmit = async () => {
    try {
      const response = await fetch(`https://yoyo560live.live/admin/agency/update/${editedData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });

      if (!response.ok) {
        throw new Error("Network problem");
      }

      fetchData1();

      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  }

  //Edit Modal
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  }

  //Delete Modal
  const handleCloseRemoveModal = () => {
    setShowRemoveModal(false);
  }


  console.log(data, "data")


  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                <img className="images" src={item.images[0]} alt="images" />
              </td>
              <td>{item.name || "N/A"}</td>
              <td>{item.userId || "N/A"}</td>
              <td>{item.code || "N/A"}</td>
              <td>{item.email}</td>
              {
                !admin && !subAdmin ? <td>
                  <select className="selectbar" onChange={(e) => { handleDropdownChange(index, e.target.value) }} >
                    <option value="action">Action</option>
                    <option value="update">Update</option>
                    <option value="remove">Remove</option>
                  </select>
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
      <h3>View Agency</h3>
      <div className="filter">
        <label>Search</label>
        <input type="text" />

        <label>Start Date</label>
        <input type="date" />

        <label>End Date</label>
        <input type="date" />

        <button className='agency-search-button'>Search</button>
      </div>

      {/* ----------------------table---------------------- */}
      <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>AgencyName</th>
            <th>UserId</th>
            <th>AgencyCode</th>
            <th>Email</th>
            {
              !admin && !subAdmin ? <th>Action</th> : ""
            }

          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>


      {/* //Delete Modal  */}
      <Modal show={showRemoveModal} onHide={handleCloseRemoveModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRemoveModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>



      {/* Update Modal  */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>


            {/* Name  */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={editedData.name}
                onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
              />
            </Form.Group>
            {/* emai;  */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={editedData.email}
                onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
              />
            </Form.Group>

            {/* //Mobile  */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>mobile</Form.Label>
              <Form.Control
                type="number"
                placeholder="mobile"
                value={editedData.mobile}
                onChange={(e) => setEditedData({ ...editedData, mobile: e.target.value })}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ViewAgency