import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddAdmin.css';

const AddAdmin = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userId: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData?.userId) {
      toast.error('Please enter valid userId')
      return
    }

    try {
      const response = await fetch('https://fun2fun.live/admin/make/adminUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: formData?.userId, username: formData?.userName, password: formData?.password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success('User is Admin now.');
        window.location.reload();

      } else {
        console.error('Failed to add Admin. Response data:', responseData);
        toast.error(responseData.error || 'Error occurred while adding Admin.');
      }
    } catch (error) {
      console.error('Error adding admin:', error);
      toast.error('An error occurred while adding Admin.');
    }
  };

  return (
    <div className='add-admin'>
      <h2>AddAdmin</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          UserId*
        </label>
        <input
          type="text"
          name="userId"
          placeholder="UserId"
          value={formData && formData?.userId}
          onChange={handleChange}
          required
        />
        <br /><br />
        <label>
          Username*
        </label>
        <input
          type="text"
          name="userName"
          placeholder="userName"
          value={formData && formData?.userName}
          onChange={handleChange}
          required
        />
        <br /><br />
        <label>
          Password*
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData && formData?.password}
          onChange={handleChange}
          required
        />
        <div className='butt-container'>
          <button type="button" className='cancel-button'>Cancel</button>
          <button type="submit" className='submit-button'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddAdmin;
