import React, { useState, useEffect } from 'react';
import "./AddSubAdmin.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSubAdmin = () => {
  const [formData, setFormData] = useState({
    userId: '',
    username: '',
    password: '',
    role: '',
    aadharFront: null,
    aadharBack: null,
  });
  const [adminUsers, setAdminUsers] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState('');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const admin = localStorage.getItem("AdminLoginData")
  let adminUser = JSON.parse(admin)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    }
  };
  useEffect(() => {
    fetch('https://yoyo560live.live/admin/adminUser/getall')
      .then(response => response.json())
      .then(data => {
        if (data.status === 1) {
          setAdminUsers(data.data);
        } else {
        }
      })
      .catch(error => {
        console.error('Error fetching admin users:', error);
      });
  }, []);
  const handleAdminChange = (e) => {
    setSelectedAdmin(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.userId) {
      toast.error('Please enter the valid userId.');
      return;
    }
    if (!formData.username) {
      toast.error('Please enter a valid username.');
      return;
    }

    if (!formData.password) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.aadharFront) {
      toast.error('Please upload the AadharCard Front image.');
      return;
    }

    if (!formData.aadharBack) {
      toast.error('Please upload the AadharCard Back image.');
      return;
    }


    const formDataToSend = new FormData();

    if (formData.aadharFront) {
      formDataToSend.append('images', formData.aadharFront);
    }
    if (formData.aadharBack) {
      formDataToSend.append('images', formData.aadharBack);
    }

    formDataToSend.append('userId', formData.userId);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('username', formData.username);
    if (admin) {
      formDataToSend.append('admin', adminUser?.userId);
    } else {
      formDataToSend.append('admin', selectedAdmin);
    }

    try {
      const response = await fetch('https://yoyo560live.live/admin/make/subAdminUser', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success('User is Subadmin now.');
      }
    } catch (error) {
      console.error('Error adding Subadmin:', error);
      toast.error('An error occurred while adding SubAdmin.');
    }
  };

  return (
    <div className="main">
      <h3>Add Sub Admin</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label>UserID*</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleInputChange}
        />


        {
          !admin ? <div><label>Admin</label><br />
            <select name="admin" value={selectedAdmin} onChange={handleAdminChange}>
              <option value="">Select an admin</option>
              {adminUsers && adminUsers?.map(admin => (
                <option key={admin?.userId} value={admin?.userId}>
                  {admin?.username}
                </option>
              ))}
            </select></div> : ""
        }

        <label>AadharCard Front/ID-Proof</label>
        <input
          type="file"
          name="aadharFront"
          onChange={handleFileChange}
        />

        <label>AadharCard Back/ID-Proof</label>
        <input
          type="file"
          name="aadharBack"
          onChange={handleFileChange}
        />
        <label>username*</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />

        <label>Password*</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="subadmin-btn">
          <button type="button" className="cancelbtn">Cancel</button>
          <button type="submit" className="submitbtn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddSubAdmin;
