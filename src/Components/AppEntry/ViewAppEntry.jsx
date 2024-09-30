import React, { useEffect, useState } from 'react';
import "./ViewAppEntry.css"
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ViewAppEntry = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fun2fun.live/admin/appEntry/getall");
        if (!response.ok) {
          throw new Error("Network problem");
        }
        const jsonData = await response.json();
        setData(jsonData.data);
        console.log("Fetched Data:", jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const navigateappentry = () => {
    navigate("/add-appentry");
  }

  const handleDropdownChange = (index, action) => {
    switch (action) {
      case "update":
        navigate("/add-appentry")
        break;
      case "remove":
        setSelectedItem(index);
        setShowModal(true);
        break;
      default:
        break;
    }
  }

  const handleConfirmDelete = async () => {
    if (selectedItem !== null) {
      const selectedItemData = data[selectedItem];
      console.log(selectedItemData._id, "Selected Id");

      try {
        const response = await fetch(`https://fun2fun.live/admin/appEntry/delete/${selectedItemData._id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error("Network problem");
        }

        const updatedData = [...data];
        updatedData.splice(selectedItem, 1);
        setData(updatedData);

        setShowModal(false);
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div className='viewappentry'>
      <h2>ViewAppEntry</h2>
      <button className='addapp-entry' onClick={navigateappentry}>Update</button>
      {data && data.length > 0 ? (
        <table className='viewappentry-table'>
          <thead className='viewappentry-head'>
            <tr className='viewappentry-row1'>
              <th className='viewapp-head'>Sr.</th>
              <th className='viewapp-head'>Image</th>
              <th className='viewapp-head'>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className='viewappentry-row2'>
                <td>{index + 1}</td>
                <td>
                  <img src={item?.images} alt='image' />
                </td>
                <td>
                  <select className="selectbar" onChange={(e) => handleDropdownChange(index, e.target.value)}>
                    <option value="action">Action</option>
                    <option value="update">Update</option>
                    {/* <option value="remove">Remove</option> */}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}


      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewAppEntry;
