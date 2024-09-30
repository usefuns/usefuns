import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  submitbtn: {
    backgroundColor: "#BF00ED",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "10px"
  }
};
function CoinSeller() {
  const [formData, setFormData] = useState({
    userId: "",
    seller_name: "",
    email: "",
    mobile: "",
    aadharf: null,
    aadharb: null,
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
    if (name === 'aadharf' || name === 'aadharb') {
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

    const formDataToSend = new FormData();
    formDataToSend.append("userId", formData.userId);
    formDataToSend.append("seller_name", formData.seller_name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("images", formData.aadharf);
    formDataToSend.append("images", formData.aadharb);

    try {
      const response = await axios.post(
        "https://yoyo560live.live/admin/coinSeller/add",
        formDataToSend
      );

      console.log(response)

      if (response.data) {
        toast.success('Added successful');
        if (response.data === 'Already exist') {
          toast.error('Already exist');
        } else {
          toast.error(response.data.error);
        }
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };
  return (
    <div>
      <div className="Vip_main">
        <h3>Add Coinseller</h3>
        <form onSubmit={handleSubmit}>
          <div className="innerdiv">
            <label htmlFor="">User Id**</label> <br />
            <input
              className="input"
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleInputChange}
            />
          </div>
          <div className="innerdiv">
            <label htmlFor="">Coin Seller Name*</label> <br />
            <input
              className="input"
              type="text"
              name="seller_name"
              value={formData.seller_name}
              onChange={handleInputChange}
              placeholder="Title"
            />
          </div>
          <div className="innerdiv">
            <label htmlFor="">Email*</label> <br />
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
          </div>
          <div className="innerdiv">
            <label htmlFor="">Mobile*</label> <br />
            <div className="input">
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="innerdiv">
            <label htmlFor="">AadharCard Front</label>
            <br />
            <div className="input">
              <input
                type="file"
                accept="image/*"
                name="aadharf"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="innerdiv">
            <label htmlFor="">AadharCard Back</label> <br />
            <div className="input">
              <input
                type="file"
                accept="image/*"
                name="aadharb"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="Button_div">
            <button type="submit" style={styles.submitbtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CoinSeller;
