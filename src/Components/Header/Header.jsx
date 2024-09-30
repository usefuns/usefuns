import React, { useState } from "react";
import "./Header.css";
import { IoIosNotifications } from 'react-icons/io';
import { useLocation } from "react-router-dom";

const Header = () => {

  const token = localStorage.getItem("MasterAdmintoken");
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(token));


  const location = useLocation();
  const isAgentLoginRoute = location.pathname === '/agent/login' || location.pathname === '/agent-panel' || location.pathname === '/agent-ranking';
  const mailCount = 5; 

  return (
    <nav className="navbar bg-body-tertiary header py-3">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1 text-white">
        Usefuns Admin Panel
      </span>
      {
        isLoggedIn && !isAgentLoginRoute && (
          <div className="notification">
            <IoIosNotifications className="bell-icon" />
            {mailCount > 0 && (
              <span className="mail-count">{mailCount}</span>
            )}
          </div>
        )
      }
    </div>
  </nav>
  );
};

export default Header;
