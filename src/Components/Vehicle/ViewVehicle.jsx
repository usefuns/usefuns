import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
// import './ViewVehicle.module.css';
import { useNavigate } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

const ViewVehicle = () => {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("https://fun2fun.live/admin/vehicle/getall");
      if (!response.ok) {
        throw new Error("network issue");
      }
      const jsonData = await response.json();
      setVehicle(jsonData.data);
      console.log("vehicle", jsonData.data)
    } catch (error) {
      console.error("error fetching data", error)
    }
  }
  const handleConfirmDelete = async (id) => {

    try {
      const response = await fetch(`https://fun2fun.live/admin/vehicle/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Network problem");
      }

      fetchData();

    } catch (error) {
      console.error("Error deleting data:", error);
    }

  }
  const navigatetoaddvehicle = () => {
    navigate('/add-vehicle')
  }


  return (
    <div className='viewframe-main'>
      <h3>View Vehicle</h3>
      <button className='add-frame-btn' onClick={navigatetoaddvehicle}>Add Vehicle</button>


      <table className="table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th> Vehicle Image</th>
            <th>Price</th>
            <th>Level</th>
            <th>Validity</th>
            <th>Action</th>
          </tr>
          {vehicle ? vehicle.map((item, index) => (
            <tr key={index}>
              <td>{index + 1 || "N/A"}</td>
              <td><img src={item.images[0] || "N/A"} alt='image' /></td>
              <td>{item.price || "N/A"}</td>
              <td>{item.level || "N/A"}</td>
              <td>{item.day || "N/A"}</td>
              <td>
                <Button variant="danger" onClick={() => handleConfirmDelete(item?._id)}>Remove</Button>
              </td>


            </tr>
          ))

            : <td colSpan="8">
              <h2><SyncLoader color="#f403fc" /></h2>
            </td>
          }
        </thead>

      </table>


    </div>
  )
}

export default ViewVehicle;
