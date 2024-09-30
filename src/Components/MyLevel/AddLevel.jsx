import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../RoomWallpaper/AddRoomWallpaper.css";



const AddLevel = () => {
  const [formData, setFormData] = useState({
    level: '',
    count: '',
    images: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.level) {
      toast.error("Plase select a level")
      return
    }
    if (!formData.count) {
      toast.error("Plase select a count")
      return
    }



    const formDataToSend = new FormData();
    formDataToSend.append('level', formData.level);
    formDataToSend.append('count', formData.count);
    // formDataToSend.append('images', formData.images);

    try {
      const response = await fetch('https://yoyo560live.live/admin/level/add', {
        method: 'POST',
        body: formDataToSend,
      });

      const responseData = await response.json();

      console.log('Response:', response);
      console.log('Response Data:', responseData);

      if (response.ok) {
        setFormData({
          level: '',
          count: '',
          // images: null,
        });
        toast.success('Level added successfully')
      } else {
        toast.error('Error submitting Level');
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
      <h2>Add Level</h2>

      <form className="container-addroom" onSubmit={handleSubmit}>
        {/* <label>Images*</label>
        <input type="file" accept="image/*" onChange={handleFileChange} /> */}

        <label>Level</label>
        <input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, level: e.target.value })} placeholder='Level' min="0" />

        <label>Exp Count</label>
        <input type="number" value={formData.day} onChange={(e) => setFormData({ ...formData, count: e.target.value })} placeholder='Count' min="0" />

        <div className="btn">
          <button className='cancel-button'>Cancel</button>
          <button className='submit-button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddLevel;
