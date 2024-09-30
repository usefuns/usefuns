import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AddRoomWallpaper.css";
import { Button } from 'react-bootstrap';



const AddRoomWallpaper = () => {
  const [formData, setFormData] = useState({
    name: "",
    wallpaper: null
  });
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
  const [isChecked, setChecked] = useState(false);

  // Function to handle checkbox changes
  const handleCheckboxChange = () => {
    setChecked(!isChecked); // Toggle the checkbox state
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.wallpaper) {
      toast.error("Please add a wallpaper")
      return
    }
    if (!formData.name) {
      toast.error("Please add name")
      return
    }


    if (formData.price < 0 || formData.day < 0) {
      toast.error('Price and validity cannot be negative');
      return;
    }

    const formDataToSend = new FormData();

    if (formData.wallpaper) {
      formDataToSend.append('images', formData.wallpaper);
    }
    const formattedInputs = inputs.map(({ price, validity }) => ({ price, validity }));
    formDataToSend.append('priceAndvalidity', JSON.stringify(formattedInputs));
    formDataToSend.append('name', formData.name);
    formDataToSend.append('is_official', isChecked);

    try {
      const response = await fetch('https://yoyo560live.live/admin/wallpaper/add', {
        method: 'POST',
        body: formDataToSend,
      });

      const responseData = await response.json();

      // console.log('Response:', response);
      // console.log('Response Data:', responseData);

      if (response.ok) {
        setFormData({
          day: '',
          price: '',
          name: '',
          wallpaper: null,
        });
        toast.success('Wallpaper added successfully')
      } else {
        toast.error('Error submitting wallpaper');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      toast.error('Error submitting data');
    }

  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, wallpaper: e.target.files[0] });
  };

  return (
    <div className='addroom'>
      <h2>Room Wallpaper</h2>

      <form className="container-addroom" onSubmit={handleSubmit}>
        <label>Name*</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='Name' />
        <label>File*</label>
        <input type="file" onChange={handleFileChange} />

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
        <div><label>Is Official*</label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          /></div>
        <div className="btn">
          <button className='cancel-button'>Cancel</button>
          <button className='submit-button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddRoomWallpaper;
