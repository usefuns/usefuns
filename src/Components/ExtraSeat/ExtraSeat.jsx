import React, { useEffect, useState } from "react";
import axios from "axios";
import './Extraseat.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";

const ExtraSeat = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://yoyo560live.live/admin/extraSeat/getall"
      );
      setData(response.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddInput = () => {
    setInputs([...inputs, { price: 0, validity: 0 }]);
  };
  const [inputs, setInputs] = useState([{ price: 0, validity: 0 }]);
  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };
  const handleSubmit = async (e, item) => {
    e.preventDefault();

    const formData = new FormData();
    const formattedInputs = inputs.map(({ price, validity }) => ({ price, validity }));
    formData.append('priceAndvalidity', JSON.stringify(formattedInputs));

    if (item.newImage) {
      formData.append("images", item.newImage);
    }

    try {
      const response = await axios.put(
        `https://yoyo560live.live/admin/extraSeat/update/${item._id}`,
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
        <h1>Extra Seat</h1>
        <button className="view">View</button>
      </div>
      {data.map((item) => (
        <div key={item._id} className="data-item">
          <div className="img">
            <img src={item.images[0]} alt="img" />
          </div>
          <form className="seat-form">
            {inputs.map((item, index) => (
              <div className="input_container" key={index}>
                <input
                  placeholder='Price'
                  name="price"
                  type="number"
                  value={item.price}
                  onChange={(event) => handleChange(event, index)}
                />{" "}
                <input
                  name="validity"
                  placeholder='Validity'
                  type="number"
                  value={item.validity}
                  onChange={(event) => handleChange(event, index)}
                />

                {inputs.length > 1 && (
                  <Button variant='danger' onClick={() => handleDeleteInput(index)}>Delete</Button>
                )}
                <br />
                {index === inputs.length - 1 && (
                  <Button variant="info" onClick={() => handleAddInput()}>Add</Button>
                )}

              </div>
            ))}
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

export default ExtraSeat;
