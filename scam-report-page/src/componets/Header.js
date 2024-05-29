import React from 'react';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { IoIosNotifications } from "react-icons/io";
import avatar from '../Avatars/avatar.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1><a href="#">Scam</a></h1>
      </div>
      
  
      <div className="header-icons">
        <TiMessages />
        <IoIosNotifications />
        </div>
        <div className="account">
        <h4>Alert</h4>
          <img src={avatar} alt="Avatar" />
          
        </div>
      
    </header>
  );
};

export default Header;
