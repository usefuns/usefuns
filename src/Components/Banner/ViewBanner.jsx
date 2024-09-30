import React, { useState, useEffect } from "react";
import './ViewBanner.css';
import { Button } from "react-bootstrap";
import styles from "./ViewFrames.module.css"

function ViewBanner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const responsedata = await fetch("https://yoyo560live.live/admin/banner/getall");
      if (!responsedata.ok) {
        throw new Error("Network issue");
      }
      const response = await responsedata.json();
      setBanner(response.data);
    } catch (error) {
      console.error("fetching problem", error)
    }
  }
  const handleConfirmDelete = async (id) => {

    try {
      const response = await fetch(`https://yoyo560live.live/admin/banner/delete/${id}`, {
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
  return (
    <div className="main">
      <h3>View Banner</h3>
      {banner.length > 0 ? (
        <table className="banner-table">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Banner Image</th>
              <th width="10px">HyperLink</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {banner.map((item, index) => (
              <tr key={index}>
                <td className="banner-data">{index + 1}</td>
                <td>
                  <img className={styles.images} src={item.images[0]} alt="image" />
                </td>
                <td className="bannner-data"> <a href={item.link} target="_blank">Go</a></td>
                <td>
                  <Button variant="danger" onClick={() => handleConfirmDelete(item?._id)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No banner data available.</p>
      )}
    </div>
  );
}

export default ViewBanner;
