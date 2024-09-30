import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddOfficialUser = () => {
  const [formData, setFormData] = useState({
    userId: '',
    officialId: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.officialId) {
      toast.error("Plase select a officialId")
      return
    }
    if (!formData.userId) {
      toast.error("Plase select a userId")
      return
    }

    try {
      const response = await fetch('https://yoyo560live.live/admin/make/officialUser', {
        method: 'POST',
        body: JSON.stringify({
          userId: formData.userId,
          officialId: formData.officialId
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setFormData({
          userId: '',
          officialId: ''
        });
        toast.success('Id added successfully')
      } else {
        toast.error('Error submitting Level');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      toast.error('Error submitting data');
    }

  }


  return (
    <div className='addroom'>
      <h2>Add Official User</h2>

      <form className="container-addroom" onSubmit={handleSubmit}>
        <label>UserId</label>
        <input type="number" value={formData.userId} onChange={(e) => setFormData({ ...formData, userId: e.target.value })} placeholder='userId' min="0" required />
        <label>Official Id</label>
        <input type="number" value={formData.officialId} onChange={(e) => setFormData({ ...formData, officialId: e.target.value })} placeholder='officialId' min="0" required />

        <div className="btn">
          <button className='cancel-button'>Cancel</button>
          <button className='submit-button' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddOfficialUser;
