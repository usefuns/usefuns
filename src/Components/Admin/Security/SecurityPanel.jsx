import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const SecurityPanel = () => {
  const navigate = useNavigate();

  const AdminloginData = localStorage.getItem("SecurityLoginData");

  useEffect(() => {
    if (!AdminloginData) {
      navigate("/uf_team/login");
      return null;
    }
  }, []);


  const Data = localStorage.getItem("SecurityLoginData");
  const parsedData = JSON.parse(Data);

  return (
    <div>
      <div className='main-cont'>
        <div className='heading-part'>
          <h3>Welcome, {parsedData && parsedData?.username}</h3>
        </div>
      </div>
    </div>
  );
};

export default SecurityPanel;
