import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./ViewVip.css"

function ViewTags() {
  const navigate = useNavigate();
  const [vipdata, setVipdata] = useState(null);



  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await fetch("https://yoyo560live.live/admin/tags/getall");
      if (!response.ok) {
        throw new Error("An error occupied");
      };
      const jsonData = await response.json()
      setVipdata(jsonData.data);
      console.log("result", jsonData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const handleConfirmDelete = async (id) => {

    try {
      const response = await fetch(`https://yoyo560live.live/admin/tags/delete/${id}`, {
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
    navigate('/addTags')
  }



  return (
    <div id="vip_main">
      <div className="vip_header">
        <h3>View Tags</h3>
        <button className="vip_btn" onClick={handleNavigate}>Add Tags</button>
      </div>

      <table id="vip_table">
        <tr>
          <th className="priceth">Sr.</th>
          <th className="priceth">Image</th>
          <th className="priceth" width="10px">
            Name
          </th>
          <th className="priceth">Action</th>
        </tr>



        {vipdata && vipdata.map((item, index) => (
          <tr key={index} className="row2">
            <td className="price">{index + 1}</td>
            <td className="price">
              <img src={item.images[0]} alt="image" />
            </td>
            <td className="price">{item.name}</td>
            <td><Button variant="danger" onClick={() => handleConfirmDelete(item?._id)}>Remove</Button></td>

          </tr>
        ))}
      </table>

    </div>
  );
}

export default ViewTags;