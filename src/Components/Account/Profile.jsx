import React, { useState, useEffect } from 'react';
import profile_pic from '../../assets/icons/profile_pic.png';
import phone_icon from '../../assets/icons/phone-icon.png';
import Email_icon from '../../assets/icons/Email-icon.png';
import Education_icon from '../../assets/icons/Education-icon.png';
import Location_icon from '../../assets/icons/Location-icon.png';
import styles from './Profile.module.css';

const Profile = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://fun2fun.live/admin/get")
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.data && responseData.data.length > 0) {
          const userProfileData = responseData.data[0];
          setData(userProfileData);
          console.log(userProfileData)
        }
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);


  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    username,
    mobile,
    email,
    education,
    location,
    images,
    designation,
  } = data;

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>User Profile</h3>
      <img src={images[0]} alt="Profile-pic" className={styles.profilepic} />
      <div className={styles.profiletext}>
        <h4 className={styles.masterpanel}>Master Panel</h4>
        <p className={styles.masterpanel}>{designation}</p>
      </div>
      <p className={styles.aboutmebtn}>About Me</p>
      <div className={styles.infocontainer}>
        <p className={styles.infohead}>
          <img className={styles.icon} src={phone_icon} alt="Phone Icon" />
          Phone Number
        </p>
        <p>{mobile}</p>
      </div>
      <div className={styles.infocontainer}>
        <p className={styles.infohead}>
          <img className={styles.icon} src={Email_icon} alt="Email Icon" />
          Email
        </p>
        <p>{email}</p>
      </div>
      <div className={styles.infocontainer}>
        <p className={styles.infohead}>
          <img
            className={styles.icon}
            src={Education_icon}
            alt="Education Icon"
          />
          Education
        </p>
        <p>{education}</p>
      </div>
      <div className={styles.infocontainer}>
        <p className={styles.infohead}>
          <img
            className={styles.icon}
            src={Location_icon}
            alt="Location Icon"
          />
          Location
        </p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Profile;
