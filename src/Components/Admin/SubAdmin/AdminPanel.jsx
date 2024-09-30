import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const SubAdminPanel = () => {
  const navigate = useNavigate();

  const AdminloginData = localStorage.getItem("SubAdminLoginData");

  useEffect(() => {
    if (!AdminloginData) {
      navigate("/subadmin/login");
      return null;
    }
  }, []);


  const Data = localStorage.getItem("SubAdminLoginData");
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

export default SubAdminPanel;
