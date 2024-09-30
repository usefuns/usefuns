import React, { useState } from 'react';
import "./Recharge/DiamondAccount.css"
import RechargeDashboard from './Recharge/RechargeDashboard';
import AgencyBalance from './AgencyBalance/AgencyBalance';
import agent from '../../assets/icons/rankingImg.png';
import { useLocation, useNavigate } from 'react-router-dom';
import AgentCenter from './AgentCenter/AgentCenter';

const AgentPanel = () => {
  const [activeMenu, setActiveMenu] = useState("recharge");
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };


  return (
    <div>
      <div className='main-cont'>


        <div className='middle-center'>
          <p
            className={activeMenu === "recharge" ? "active-menu" : ""}
            onClick={() => handleMenuClick("recharge")}
          >
            User Recharge Dashboard
          </p>

        </div>
      </div>
      <div>
        {activeMenu === "recharge" && <RechargeDashboard />}


      </div>
    </div>
  );
};

export default AgentPanel;
