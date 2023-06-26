// Navbar.js
import React, { useState } from 'react';
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="hero">
      <nav className="nav1">
        <ul id="links12">
          <div className='heros'>
          <img src='logo2.png' width="200" alt="logo"/>
          </div>
          <li>
            <Link to="/home" className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className={activeItem === 'aboutus' ? 'active' : ''} onClick={() => handleItemClick('aboutus')}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/login" className={activeItem === 'login' ? 'active' : ''} onClick={() => handleItemClick('login')}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/course" className={activeItem === 'course' ? 'active' : ''} onClick={() => handleItemClick('course')}>
              Course
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
