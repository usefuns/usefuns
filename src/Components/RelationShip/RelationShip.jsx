
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../ExtraSeat/Extraseat.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RelationShip = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://fun2fun.live/admin/relationship/getall"
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSubmit = async (e, item) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("day", item.day);
    formData.append("price", item.price);

    if (item.newImage) {
      formData.append("images", item.newImage);
    }

    try {
      const response = await axios.put(
        `https://fun2fun.live/admin/relationship/update`,
        formData
      );
      if (response.data) {
        toast.success("Data is Updated")
        fetchData();
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error while updating the Data")
    }
  };

  const handleImageUpload = (e, item) => {
    const newImage = e.target.files[0];
    if (newImage) {
      item.newImage = newImage;
    }

    setData(prevData => prevData.map(dataItem => dataItem._id === item._id ? { ...dataItem, newImage } : dataItem));
  };

  return (
    <div className="seat-container">
      <div className="text-cont">
        <h1>Relationship</h1>
        {/* <button className="view">View</button> */}
      </div>
      {data.map((item) => (
        <div key={item._id} className="data-item">
          <div className="img">
            <img src={item.images[0]} alt="img" />
          </div>
          <form className="seat-form">
            {/* <p>Day</p>
            <input
              type="text"
              value={item.day}
              placeholder="Validity day"
              onChange={(e) => {
                const updatedDay = e.target.value;
                setData(prevData => prevData.map(dataItem => dataItem._id === item._id ? { ...dataItem, day: updatedDay } : dataItem));
              }}
            /> */}
            <p>Price</p>
            <input
              type="text"
              value={item.price}
              placeholder="Enter price"
              onChange={(e) => {
                const updatedPrice = e.target.value;
                setData(prevData => prevData.map(dataItem => dataItem._id === item._id ? { ...dataItem, price: updatedPrice } : dataItem));
              }}
            />
            <input className="imageinput"
              id={`fileupload-${item._id}`}
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, item)}
            />
            <div className="btn-cont7">
              <button className="disable" type="button">Disable</button>
              <button className="submit" type="button" onClick={(e) => handleSubmit(e, item)}>Submit</button>
            </div>
          </form>
          {/* {item.isEditing && (
            <button onClick={() => handleEdit(item)}>Edit</button>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default RelationShip;
