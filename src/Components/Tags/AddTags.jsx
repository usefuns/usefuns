import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "./AddRoomWallpaper.css";
import { SyncLoader } from 'react-spinners';



const AddTags = () => {
  const [formData, setFormData] = useState({
    name: '',
    images: []
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error("Plase select a name")
      return
    }
    if (!formData.images) {
      toast.error("Plase select a Image")
      return
    }

    const formDataToSend = new FormData();

    formDataToSend.append('name', formData.name);
    formDataToSend.append('images', formData.images);
    setLoading(true);
    try {
      const response = await fetch('https://yoyo560live.live/admin/tags/add', {
        method: 'POST',
        body: formDataToSend,
      });

      const responseData = await response.json();

      console.log('Response:', response);
      console.log('Response Data:', responseData);

      if (response.ok) {
        setLoading(false);
        setFormData({
          name: '',
          chatBubble: null,
        });
        toast.success('Tag added successfully')
      } else {
        setLoading(false);
        toast.error('Error submitting Tag');
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
      <h2>Add Tags</h2>

      <form className="container-addroom" onSubmit={handleSubmit}>
        <label>Images*</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />

        <label>Name*</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder='Name' />


        <div className="btn">
          <button className='cancel-button'>Cancel</button>
          {
            loading === false ? <button className='submit-button' type="submit">Submit</button> : <SyncLoader color="#f403fc" />
          }

        </div>
      </form>
    </div>
  );
}

export default AddTags;
