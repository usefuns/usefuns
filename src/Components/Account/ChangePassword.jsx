import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from './Profile';
import styles from "./ChangePassword.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password must match");
      return;
    }

    const apiUrl = "https://fun2fun.live/admin/resetpassword";
    const data = {
      username: "admin@gmail.com",
      newpassword: newPassword,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Password updated successfully!", data)
        toast.success("Password Updated")
        setMessage("Password updated successfully!");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error updating password:", error);
        toast.error("Error while updating password")
        setMessage("Error updating password. Please try again.")
      });
  };

  return (
    <div className={styles.container}>
      <Profile />
      <div className={styles.changepass_container}>
        <div className={styles.settings}>
          <p className={styles.heading}>Settings</p>
          <p className={styles.heading}>Change password</p>
        </div>
        {message && <p className={styles.message}>{message}</p>}
        {/* <div className={styles.inputcontainer}>
          <label className={styles.label}>Old Password</label>
          <input
            type="text"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Old Password"
            className={styles.inputfield}
          />
        </div> */}
        <div className={styles.inputcontainer}>
          <label className={styles.label}>New Password</label>
          <input
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className={styles.inputfield}
          />
        </div>
        <div className={styles.inputcontainer}>
          <label className={styles.label}>Confirm Password</label>
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className={styles.inputfield}
          />
        </div>
        <button
          onClick={handleUpdatePassword}
          className={styles.updatebtn}
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
