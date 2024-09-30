import React, { useEffect, useState } from "react";
import './managegift.css';
import { toast } from "react-toastify";
import Select from "react-select";
import { Modal, Button, Form } from 'react-bootstrap';
function ManageGift() {
  const [viewgift, setViewgift] = useState(null)
  const [status, setStatus] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [allCategory, setAllCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editedData, setEditedData] = useState({
    images: null,
    name: '',
    coin: '',
    category_name: ''
  });
  useEffect(() => {
    fetchData();
    fetchCategory();
  }, [])
  const fetchCategory = async () => {
    try {
      const response = await fetch(
        `https://yoyo560live.live/admin/giftCategory/getall`
      );
      const jsonData = await response.json();
      console.log(jsonData.data)
      setAllCategory(jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/gift/getall");
      if (!response.ok) {
        throw new Error("network issue")
      }
      const jsonData = await response.json();
      setViewgift(jsonData.data);
      setStatus(jsonData.status)
      console.log("gifts", jsonData.data)
      console.log("status", jsonData.status)

    } catch (error) {
      console.error("error fetch", error)
    }
  }
  const confirmDelete = async (id) => {
    try {
      const response = await fetch(
        `https://yoyo560live.live/admin/gift/delete/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        toast.success('removed successfully');
        fetchData();
      } else {
        console.error('Failed to remove user');
        const errorResponse = await response.json();
        console.error('Error Response:', errorResponse);
      }
    } catch (error) {
      console.error('Error removing user:', error);
    }
  };
  const handleEditFormChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;

    setEditedData({
      ...editedData,
      [name]: newValue,
    });
  };
  const handleDropdownChange = (index, action) => {
    switch (action) {
      case "update":
        setShowEditModal(true);
        setEditedData(viewgift[index]);
        break;
      default:
        break;
    }
  }
  const handleUpdateSubmit = async () => {
    const formDataToSend = new FormData();
    if (editedData.images) {
      formDataToSend.append('images', editedData.images);
    }
    formDataToSend.append('coin', editedData.coin);
    formDataToSend.append('name', editedData.name);
    formDataToSend.append('category_name', selectedCategory);
    console.log(editedData._id)
    try {
      const response = await fetch(`https://yoyo560live.live/admin/gift/update/${editedData._id}`, {
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
  console.log(selectedCategory);

  return (
    <div>
      <div id="gift_main">
        <div className="gift_header">
          <h3>Manage Gift </h3>
          <button className="gift_btn">Add Gift Category</button>
        </div>

        <table >
          <tr>
            <th>Sr.</th>
            <th> Title</th>
            <th>Image</th>
            <th>Category</th>
            <th>Coin</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {viewgift && viewgift.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td><img src={item.images[1]} alt="image" /></td>
              <td>{item.category_name}</td>
              <td>{item.coin}</td>
              <td>{status}</td>
              <td>
                <td><Button variant='danger' onClick={() => confirmDelete(item?._id)}>Remove</Button></td>
              </td>
              <td>
                <select className="selectbar" onClick={() => setSelectedItem(item)} onChange={(e) => handleDropdownChange(index, e.target.value)}>
                  <option value="action">Action</option>
                  <option value="update">Update</option>
                </select>
              </td>
            </tr>
          ))}
        </table>
        {/* Update Modal  */}
        <Modal show={showEditModal} onHide={handleCloseEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* Image */}
              <Form.Group controlId="formBasicImage">
                {/* <Form.Label>Image</Form.Label> */}
                {/* <div className="mb-2">
                  <img
                    src={editedData.images[1] instanceof Blob ? URL.createObjectURL(editedData.images[1]) : ''}
                    alt="Image Preview"
                    style={{ width: '100px', height: '100px' }}
                  />
                </div> */}
                {/* <Form.Control
                  type="file"
                  accept="image/*"
                  name="images"
                  onChange={handleEditFormChange}
                /> */}
              </Form.Group>
              {/* Price */}
              <Form.Group controlId="formBasicDescription">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={editedData.name}
                  onChange={handleEditFormChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicDescription">
                <Form.Label>Category</Form.Label>
                <Select
                  // value={selectedCategory && selectedCategory}
                  onChange={(e) => setSelectedCategory(e.name)}
                  placeholder={"Select Lists"}
                  options={allCategory}
                  classNamePrefix="select2-selection"
                  required
                />
              </Form.Group>
              {/* Duration */}
              <Form.Group controlId="formBasicDescription">
                <Form.Label>Coin</Form.Label>
                <Form.Control
                  type="number"
                  name="coin"
                  placeholder="Enter coins"
                  value={editedData.coin}
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
    </div>
  );
}

export default ManageGift;