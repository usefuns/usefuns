import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AgentLogin = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    mobile: "",
    otp: "",
    showOtpInput: false,
  });
  const [responseOtp, setResponseOtp] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.mobile) {
      let mobile = "91" + Number(formData.mobile)
      try {
        const response = await axios.post(
          "https://fun2fun.live/coinseller/getmobileotp",
          { mobile: Number(mobile) }
        );
        if (response) {
          console.log(response && response.data.otp);
          setResponseOtp(response && response?.data?.otp);
          localStorage.setItem("CoinSellermobile", formData.mobile);
          setFormData((prevData) => ({
            ...prevData,
            showOtpInput: true,
          }));

        }
      } catch (error) {
        console.error("API Request Error:", error);
      }
    }
  };

  console.log(responseOtp, "responseOtp");
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.otp, "formData.otp", responseOtp, "responseOtp");
    if (formData.otp === responseOtp) {
      try {
        const storedmobile = localStorage.getItem("CoinSellermobile");
        const mobileResponse = await axios.post(
          "https://fun2fun.live/coinseller/loginmobile",
          { mobile: storedmobile }
        );

        if (mobileResponse.data) {
          localStorage.setItem("AgentSignIn", true)
          console.log(mobileResponse.data);
          toast.success("Login Successful");
          navigate("/agent-panel", { state: mobileResponse.data });
        } else {
          toast.error("Login failed");
        }
      } catch (error) {
        console.error("API Request Error:", error);
        toast.error("An error occurred");
      }
    } else {
      toast.error("Invalid OTP");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="agent-login-container">
      {formData.showOtpInput ? (
        <form onSubmit={handleOtpSubmit}>
          <div className="login-image">
            <img src="https://i.gifer.com/IPNp.gif" alt="" />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="otp"
              value={formData.otp}
              placeholder="Enter OTP"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="agent-next">
            Verify OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="login-image">
            <img src="https://i.gifer.com/IPNp.gif" alt="" />
          </div>
          <div className="input-container">
            <input
              type="mobile"
              name="mobile"
              value={formData.mobile}
              placeholder="Enter your mobile"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="agent-next">
            Send OTP
          </button>
        </form>
      )}
    </div>
  );
};

export default AgentLogin;
