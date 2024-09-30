import React, { useState } from 'react'
import "./AddVip.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddVip() {
  const [formData, setFormData] = useState({
    day: '',
    price: '',
    level: '',
    name: '',
    vip: null,
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
    if (name === 'vip' || name === 'thumbnail') {
      if (files.length > 0) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: files[0],
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.vip) {
      toast.error("Please upload vip Image")
      return
    }
    if (!formData.thumbnail) {
      toast.error("Please upload thumbnail Image")
      return
    }
    if (!formData.level) {
      toast.error("Please upload level")
      return
    }
    if (!formData.price) {
      toast.error("Please upload price")
      return
    }
    if (!formData.day) {
      toast.error("Please upload day")
      return
    }
    if (!formData.name) {
      toast.error("Please name")
      return
    }


    const formDataToSend = new FormData();

    if (formData.vip) {
      formDataToSend.append('images', formData.vip);
    }
    if (formData.thumbnail) {
      formDataToSend.append('images', formData.thumbnail);
    }


    formDataToSend.append('day', formData.day);
    formDataToSend.append('level', formData.level);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('name', formData.name);

    try {
      const response = await fetch('https://fun2fun.live/admin/vip/add', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response data:', responseData);
        toast.success('Vip added successfully.');
      } else {
        console.error('Failed to add Vip. Response status:', response.status);
        toast.error('Error occurred while adding Vip.');
      }
    } catch (error) {
      console.error('Error adding Vip:', error);
    }
  };




  return (
    <form className="Vip_main" onSubmit={handleSubmit}>
      <h3>Add  Vip</h3>
      <div className="innerdiv">
        <label>Name*</label><br />
        <input className="input" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='name' />
      </div>
      <div className="innerdiv">
        <label htmlFor="">Image*</label> <br />
        <div className="input">
          <input type="file" name="vip" id="" onChange={handleFileChange} />
        </div>
      </div>
      <div className="innerdiv">
        <label htmlFor="">Thumbnail* (MP4)</label>
        <br />
        <div className="input">
          <input type="file" name="thumbnail" id="" onChange={handleFileChange} />
        </div>
      </div>
      <div className="innerdiv">
        <label htmlFor="">Level*</label> <br />
        <input className="input" type="number" name="level" id="" placeholder="Level" onChange={handleInputChange} />
      </div>
      <div className="innerdiv">
        <label htmlFor="">Price*</label> <br />
        <input className="input" type="number" name="price" id="" placeholder="Price" onChange={handleInputChange} />
      </div>
      <div className="innerdiv">
        <label htmlFor="">Validity* (days)*</label> <br />
        <input className="input" type="number" name="day" id="" placeholder="Validity" onChange={handleInputChange} />
      </div>
      <div className='Button_div'>
        <button className='btn-btn1'>Cancel</button>
        <button type="submit" className='btn-btn2'>Submit</button>
      </div>
    </form>
  )
}

export default AddVip