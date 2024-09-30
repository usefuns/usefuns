import React, { useEffect, useState } from 'react';
import "./ViewRoomWallpaper.css";
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

const ViewRoomWallpaper = () => {
  const [data, setData] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const navigate = useNavigate()
  const [editedData, setEditedData] = useState({
    images: null,
    price: '',
    day: '',
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`https://fun2fun.live/admin/wallpaper/getall`);
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
  useEffect(() => {
    fetchData();
  }, []);


  const handleDropdownChange = (index, action) => {
    switch (action) {
      case "update":
        setShowEditModal(true);
        setEditedData(data[index]);
        break;
      case "remove":
        setShowRemoveModal(true);
        break;
      default:
        break;
    }
  }

  const handleConfirmDelete = async () => {

    console.log(selectedItem?._id, "Selected Id");

    try {
      const response = await fetch(`https://fun2fun.live/admin/wallpaper/delete/${selectedItem?._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Network problem");
      }

      const updatedData = [...data];
      updatedData.splice(selectedItem, 1);
      setData(updatedData);

      setShowRemoveModal(false);
    } catch (error) {
      console.error("Error deleting data:", error);
    }

  }

  const handleUpdateSubmit = async () => {
    const formDataToSend = new FormData();
    if (editedData.images) {
      formDataToSend.append('images', editedData.images);
    }
    formDataToSend.append('price', editedData.price);
    formDataToSend.append('day', editedData.day);
    console.log(editedData._id)
    try {
      const response = await fetch(`https://fun2fun.live/admin/appEntry/update/${editedData._id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Network problem");
      }

      fetchData();
      setShowEditModal(false);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  }

  const handleCloseRemoveModal = () => {
    setShowRemoveModal(false);
  }


  console.log(data, "data")

  const handlePost = () => {
    navigate('/add-room-wallpaper')
  }

  const handleEditFormChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;

    setEditedData({
      ...editedData,
      [name]: newValue,
    });
  };

  const renderTableRows = () => {
    if (data) {
      const dataArray = Array.isArray(data) ? data : [data];
      return (
        <>
          {dataArray.map((item, index) => (
            <tr key={index}>
              <td>{index + 1 || "N/A"}</td>
              <td><img className="images" src={item.images || "N/A"} alt='images' /></td>
              <td>{item.name || "N/A"}</td>
              <td>{item.price || "N/A"}</td>
              <td>{item.day || "N/A"} Day</td>
              <td>
                <select className="selectbar" onClick={() => setSelectedItem(item)} onChange={(e) => handleDropdownChange(index, e.target.value)}>
                  <option value="action">Action</option>
                  <option value="update">Update</option>
                  <option onClick={() => setSelectedItem(item)} value="remove">Remove</option>
                </select>
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
    <div className='view-roomwallpaper'>
      <h3>ViewRoomWallpaper</h3>
      <button className='add-app-btn' onClick={handlePost}>Add Room Wallpaper</button>

      <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th> Name</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Action</th>
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
          <Button variant="danger" onClick={() => handleConfirmDelete()}>
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
            {/* Image */}
            <Form.Group controlId="formBasicImage">
              <Form.Label>Image</Form.Label>
              <div className="mb-2">
                <img
                  src={editedData.images instanceof Blob ? URL.createObjectURL(editedData.images) : ''}
                  alt="Image Preview"
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
              <Form.Control
                type="file"
                accept="image/*"
                name="images"
                onChange={handleEditFormChange}
              />
            </Form.Group>
            {/* Price */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter Price"
                value={editedData.price}
                onChange={handleEditFormChange}
              />
            </Form.Group>
            {/* Duration */}
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="number"
                name="day"
                placeholder="Enter Duration"
                value={editedData.day}
                onChange={handleEditFormChange}
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

export default ViewRoomWallpaper