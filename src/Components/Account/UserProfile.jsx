import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import styles from "./UserProfile.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {

  const [message, setMessage] = useState("");
  const [data, setData] = useState(null)
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    education: "",
    location: "",
    designation: "",
    images: null

  })
  useEffect(() => {
    fetch("https://yoyo560live.live/admin/get")
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.data && responseData.data.length > 0) {
          const userProfileData = responseData.data[0];
          setData(userProfileData);
          console.log(userProfileData)
          setFormData({
            username: userProfileData.username,
            mobile: userProfileData.mobile.toString(),
            email: userProfileData.email,
            education: userProfileData.education,
            location: userProfileData.location,
            designation: userProfileData.designation,
            images: userProfileData.images[0],
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  const handleEditProfile = async () => {
    const apiUrl = "https://yoyo560live.live/admin/update";
    const authToken = localStorage.getItem("MasterAdmintoken");

    const finalFormData = new FormData();
    finalFormData.append("username", formData.username);
    finalFormData.append("mobile", formData.mobile);
    finalFormData.append("email", formData.email);
    finalFormData.append("education", formData.education);
    finalFormData.append("location", formData.location);
    finalFormData.append("designation", formData.designation);

    if (formData.images) {
      finalFormData.append("images", formData.images);
    }

    try {
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: finalFormData,
      });

      const responseData = await response.json();

      if (response.ok && responseData.status === 1) {
        console.log("Profile updated successfully!", responseData.message);
        // setMessage("Profile updated successfully!");
        // setData(responseData.updatedData);
        window.location.reload()
        toast.success("Data Edited")
      } else {
        console.error("Error updating profile:", responseData.message);
        // setMessage("Error updating profile. Please try again.");
        toast.error("Error while updating data")
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Error updating profile. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      images: selectedImage ? selectedImage : prevData.images,
    }));
  };


  return (
    <div className={styles.container}>
      <Profile />
      <div>
        <div className={styles.settings}>
          <p className={styles.label}>Settings</p>
          <p className={styles.label}>Edit Profile</p>
        </div>
        {message && <p className={styles.message}>{message}</p>}
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={styles.inputfield}
            readOnly
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Phone Number</label>
          <input
            type="tel"
            value={formData.mobile}
            name="mobile"
            onChange={handleInputChange}
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Designation</label>
          <input
            type="text"
            value={formData.designation}
            name="designation"
            onChange={handleInputChange}
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Education</label>
          <input
            type="text"
            value={formData.education}
            name="education"
            onChange={handleInputChange}
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Location</label>
          <input
            type="text"
            value={formData.location}
            name="location"
            onChange={handleInputChange}
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.inputlabel}>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.inputfield}
          />
        </div>
        <button
          className={styles.editbtn}
          onClick={handleEditProfile}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
