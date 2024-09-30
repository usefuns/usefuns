import React, { useState } from 'react';
import styles from "./AddFrames.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';

const AddFrames = () => {
  const [formData, setFormData] = useState({
    image: null,
    thumbnail: null,
    level: '',
    price: '',
    day: '',
    is_official: '',
    name: ''
  });
  const [isChecked, setChecked] = useState(false);

  // Function to handle checkbox changes
  const handleCheckboxChange = () => {
    setChecked(!isChecked); // Toggle the checkbox state
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,

    });
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
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      toast.error("Please add a Image")
      return
    }

    if (!formData.thumbnail) {
      toast.error("Please add a Thumbnail")
      return
    }

    if (!formData.name) {
      toast.error("Please add name")
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
      const response = await fetch('https://fun2fun.live/admin/frame/add', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        // console.log('Response data:', responseData);
        toast.success('Frames added successfully.');
      } else {
        // console.error('Failed to add Frames. Response status:', response.status);
        toast.error('Error occurred while adding Frames.');
      }
    } catch (error) {
      // console.error('Error adding Frames:', error);
    }
  };
  console.log(inputs);
  return (
    <div className={styles.main}>
      <h3>Add Frames</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Name*</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='name' />
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
        {/* <label>Level*</label>
        <input
          type="text"
          name="level"
          value={formData.level}
          onChange={handleInputChange}
        /> */}
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

        {/* <div className="body"> {JSON.stringify(inputs)} </div> */}


        <div>
          <label>is official*</label>
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

export default AddFrames;
