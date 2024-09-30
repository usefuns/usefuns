import React, { useState } from 'react';
import styles from "./AddVehicle.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    day: '',
    price: '',
    level: '',
    name: '',
    image: null,
    thumbnail: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    }
  };
  const [isChecked, setChecked] = useState(false);

  // Function to handle checkbox changes
  const handleCheckboxChange = () => {
    setChecked(!isChecked); // Toggle the checkbox state
  };
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      toast.error("Please add vehicle Image")
      return
    }
    if (!formData.thumbnail) {
      toast.error("Please add thumbnail Image")
      return
    }
    if (!formData.name) {
      toast.error("Please name.")
      return
    }



    const formDataToSend = new FormData();
    if (formData.thumbnail) {
      formDataToSend.append('images', formData.thumbnail);
    }
    if (formData.image) {
      formDataToSend.append('images', formData.image);
    }

    const formattedInputs = inputs.map(({ price, validity }) => ({ price, validity }));
    formDataToSend.append('priceAndvalidity', JSON.stringify(formattedInputs));
    formDataToSend.append('name', formData.name);
    formDataToSend.append('is_official', isChecked);

    try {
      const response = await fetch('https://yoyo560live.live/admin/vehicle/add', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response data:', responseData);
        toast.success('Vehicle added successfully.');
      } else {
        console.error('Failed to add Vehicle. Response status:', response.status);
        toast.error('Error occured while adding adding Vehicle.');
      }
    } catch (error) {
      console.error('Error adding Vehicle:', error);
    }
  };


  return (
    <div className={styles.main}>
      <h3>Add Vehicle</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Name*</label><br />
        <input className="input" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='name' />
        <label>Thumbnail</label>
        <input
          type="file"
          name="thumbnail"
          onChange={handleFileChange}
        />
        <label>File*</label>
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
        />
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




        <div>
          <label>is  Official*</label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            value={isChecked} // This value can be true or false
          /></div>



        <div className={styles.btn}>
          <button type="button" className={styles.cancelbtn}>Cancel</button>
          <button type="submit" className={styles.submitbtn}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddVehicle;
