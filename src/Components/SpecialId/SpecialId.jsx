import React from 'react';
import './Specialid.css';
import icon from "../../assets/icons/SPACIAL ID PNG.png";
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const SpecialIdComp = () => {
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
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    day: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.id) {
      toast.error("Please id")
      return
    }
    if (!formData.price) {
      toast.error("Please price")
      return
    }
    // let payload = {
    //   id: formData.id,
    //   name: formData.name,
    //   price: formData.price,
    //   day: formData.day
    // }
    try {
      const response = await fetch('https://yoyo560live.live/admin/specialId/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: formData.id,
          name: formData.name,
          priceAndvalidity: inputs
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setFormData("");
        console.log('Response data:', responseData);
        toast.success('id added successfully.');
      } else {
        console.error('Failed to add id. Response status:', response.status);
        toast.error('Error occured while adding adding id.');
      }
    } catch (error) {
      console.error('Error adding id:', error);
    }
  };
  return (
    <div>
      <h2>Special ID</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Special Id</label>
          <input type="number" value={formData.id} onChange={(e) => setFormData({ ...formData, id: e.target.value })} />
          <br />
          <label>name</label>
          <input
            type='text'
            name='name'
            value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <br />
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
          <img style={{ height: "80px" }} src={icon} alt="" />
          <br />
          <Button type='submit'>SUBMIT</Button>
        </div>
      </form>
    </div>
  )
}

export default SpecialIdComp