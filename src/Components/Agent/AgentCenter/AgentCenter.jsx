import React from 'react'
import "../Recharge/RechargeDashboard.css";
import { useState } from 'react';
import MyCustomer from './MyCustomer';
import IncomeRecord from './IncomeRecord';
import BalanceRecord from './BalanceRecord';

const AgentCenter = () => {
    const [activeMenu, setActiveMenu] = useState("customer"); 

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
      };

  return (
    <div  className='agentCenterdiv'>
          <div className='middle-center'>
          <p
            className={activeMenu === "customer" ? "active-menubtn" : ""}
            onClick={() => handleMenuClick("customer")}
          >
            My Customer
          </p>
          <p
            className={activeMenu === "income" ? "active-menubtn" : ""}
            onClick={() => handleMenuClick("income")}
          >
            Income Record
          </p>
          <p
            className={activeMenu === "balance" ? "active-menubtn" : ""}
            onClick={() => handleMenuClick("balance")}
          >
            Balance Record
          </p>
        </div>
        <div>
        {activeMenu === "customer" && <MyCustomer/>}
        {activeMenu === "income" && <IncomeRecord />}
        {activeMenu === "center" && <BalanceRecord/>}
        
      </div>
    </div>
  )
}

export default AgentCenter