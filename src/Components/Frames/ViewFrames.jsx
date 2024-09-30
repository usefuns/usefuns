import React, { useEffect, useState } from 'react';
import styles from "./ViewFrames.module.css"
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { SyncLoader } from 'react-spinners';

const ViewFrames = () => {
  const navigate = useNavigate();
  const [frame, setFrame] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/frame/getall");
      if (!response.ok) {
        throw new Error("network issue");
      }
      const jsonData = await response.json();
      setFrame(jsonData.data);
      // console.log("frame", jsonData.data)
    } catch (error) {
      // console.error("error fetching data" ,error)
    }
  }
  const handleConfirmDelete = async (id) => {

    try {
      const response = await fetch(`https://yoyo560live.live/admin/frame/delete/${id}`, {
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
  const handleNavigate = () => {
    navigate('/add-frames')
  }


  return (
    <div className={styles.viewframemain}>
      <h3>View Frames</h3>
      <button className={styles.addframebtn} onClick={handleNavigate}>Add Frame</button>


      <table >
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Frame Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Level</th>
            <th>Validity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {frame && frame.length > 0 ? (
            frame.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img className={styles.images} src={item.images[0]} alt="image" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.level}</td>
                <td>{item.day}</td>
                <td>
                  <Button variant="danger" onClick={() => handleConfirmDelete(item?._id)}>Remove</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <h2><SyncLoader color="#f403fc" /></h2>
            </tr>
          )}
        </tbody>
      </table>


    </div>
  )
}

export default ViewFrames