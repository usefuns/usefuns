import React, { useState } from "react";
import styles from "./Managelogo.module.css";

const ManageLogo = () => {
  const [logo, setLogo] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

//   const handleLogoUpdate = () => {
//     const apiUrl = "";
//     const authToken = "";
//     const formData = new FormData();
//     formData.append("logo", logo);
//     fetch(apiUrl, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Logo updated successfully!", data);
//       })
//       .catch((error) => {
//         console.error("Error updating logo:", error);
//       });
//   };

  return (
    <div className={styles.container}>
      <h3 className={styles.logoheader}>Manage Logo</h3>
      <h4 className={styles.updatelogo}>Update Logo</h4>
      <div className={styles.logoinputcontainer}>
        <div className={styles.logoinput}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ marginTop: "19px", marginBottom: "16px", marginLeft: "18px" }}
          />
        </div>
        {/* {logo ? ( */}
          <div className={styles.logopreview}>
            <p className={styles.logotitle}>Logo</p>
            <img
              src={logo}
              alt="Updated Logo"
              className={styles.logoimage}
            />
          </div>
        {/* ) : ( */}
          {/* ""
        )} */}
      </div>
    </div>
  );
};

export default ManageLogo;
