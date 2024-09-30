import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "./AddRoomWallpaper.css";



const AddBubble = () => {
  const [formData, setFormData] = useState({
    price: '',
    day: '',
    name: '',
    images: []
  });
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

    if (!formData.images) {
      toast.error("Please Select a Image")
      return
    }
    if (!formData?.name) {
      toast.error('Please Select a Name');
      return;
    }

    const formDataToSend = new FormData();

    const formattedInputs = inputs.map(({ price, validity }) => ({ price, validity }));
    formDataToSend.append('priceAndvalidity', JSON.stringify(formattedInputs));
    formDataToSend.append('images', formData.images);
    formDataToSend.append('name', formData.name)
    formDataToSend.append('is_official', isChecked);
    try {
      const response = await fetch('https://yoyo560live.live/admin/chatBubble/add', {
        method: 'POST',
        body: formDataToSend,
      });

      const responseData = await response.json();

      console.log('Response:', response);
      console.log('Response Data:', responseData);

      if (response.ok) {
        setFormData({
          price: '',
          day: "",
          chatBubble: null,
        });
        toast.success('Chat Bubble added successfully')
      } else {
        toast.error('Error submitting Chat Bubble');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      toast.error('Error submitting data');
    }

  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files[0] });
  };

  return (
    <div className='addroom'>
      <h2>Add Chat Bubble</h2>

      <form className="container-addroom" onSubmit={handleSubmit}>
        <label>Name*</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='name' />
        <label>Images*</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />

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
          <label>is Official*</label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            value={isChecked} // This value can be true or false
          /></div>

        <div className="btn">
          <button className='cancel-button'>Cancel</button>
          <button className='submit-button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddBubble;
