import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './RechargeDashboard.css';
import avatar from "../../../assets/icons/avatar.png";
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
function RechargeDashboard({ coinseller }) {
  const navigate = useNavigate();
  const [usefunId, setUsefunId] = useState('');
  const [userData, setUserData] = useState(null);
  const [plan, setSelectedplan] = useState('');
  const [data, setSelectedData] = useState();
  const options = [
    { value: '1140 Diamond in 75 INR', label: '1140 Diamond in 75 INR' },
    { value: '3030 Diamond in 200 INR', label: '3030 Diamond in 200 INR (1% extra)' },
    { value: '12379 Diamond in 800 INR', label: '12379 Diamond in 800 INR (2% extra)' },
    { value: '23241 Diamond in 1500 INR', label: '23241 Diamond in 1500 INR (2% extra)' },
    { value: '54228 Diamond in 3500 INR', label: '54228 Diamond in 3500 INR (2% extra)' },
    { value: '155040 Diamond in 10000 INR', label: '155040 Diamond in 10000 INR (2% extra)' },
  ]
  const handleRecharge = async () => {
    if (usefunId === "") {
      toast.error('Please fill userId')
    }
    if (plan === "") {
      toast.error('Please select plans')
    }
    let diamonds = plan.split(' ')
    let price = plan.split(' ')
    const requestBody = {
      userId: usefunId,
      price: parseInt(price[3]),
      diamonds: parseInt(diamonds[0])
    };
    const response = await axios.post(
      'https://fun2fun.live/payment/new',
      requestBody
    );
    if (response.data && response.data.data) {
      let url = response?.data?.data.data
      window.location.href = url
    }

  };

  const handleConfirmUserId = async () => {
    try {

      const response = await axios.get(
        `https://fun2fun.live/user/getbyuserId/${usefunId}`
      );

      if (response.data.data) {
        console.log(response.data, "RESPONSE DATA");
        setUserData(response.data.data);
      }
    } catch (error) {
      console.error("API Request Error:", error);
    }
  };



  const handleCancelUserData = () => {
    setUserData(null)
    setUsefunId("")
  }

  return (
    <div className='main-cont'>
      <div className='last-cont'>
        <div className='last-cont-1'>
          <label htmlFor='text'>Usefun Id</label>
          <div className='confirm-flex'>
            {userData ? (
              <div>
                <div className='avatar-main-div'>
                  <div>
                    <img className='img-avatar' src={(userData.images && userData.images[0]) || avatar} alt="" />
                  </div>
                  <div className='name-div'>
                    <p>{userData.name}</p>
                    {userData.userId && (
                      <h6 className='usefunId-bold'>Usefuns ID: {userData.userId}</h6>
                    )}
                  </div>
                  <div><button className='cancel-btn' onClick={handleCancelUserData}>Cancel</button></div>
                </div>
              </div>
            ) : (
              <input
                type='text'
                className='usefun-id-text'
                placeholder='enter usefun id'
                value={usefunId}
                onChange={(e) => setUsefunId(e.target.value)}
              />
            )}
            {!userData && (
              <div className='btn2'>
                <button className='cofirm-btn' onClick={handleConfirmUserId}>
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
        <div className='last-cont-1'>
          <label htmlFor='text'>Choose a recharge plan</label>
          <div>

            <Select
              onChange={(e) => {
                setSelectedplan(e.value);
              }}
              placeholder={"Select "}
              options={options}
              required
            />
          </div>
        </div>
        <div className='button-sub'>


          {
            <button className='confirm' onClick={() => {
              handleRecharge();
            }}>
              Recharge
            </button>
          }
        </div>
      </div>
      {/* <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you Sure ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userData ? (
            <div className='avatar-main-div'>
              <div>
                <img className='img-avatar' src={(userData.images && userData.images[0]) || avatar} alt="" />
              </div>
              <div className='name-div'>
                <p>Name : {userData.name}</p>
                {userData.userId && (
                  <h6 className='usefunId-bold'>Usefuns ID: {userData.userId}</h6>
                )}
                <p>Are You sure to recharge{" "}
                  {amount} diamonds to this usefun Id?</p>
              </div>
            </div>
          ) : ""}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant='primary' onClick={handleRechargeConfirmed}>
            Confirm Recharge
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default RechargeDashboard;
