// Navbar2.js
import React from 'react';
import "./navbar2.css";

import { FaInstagram, FaPhoneAlt } from 'react-icons/fa';

function Navbar2() {
  return (
    <div className="hero1">
      <nav className="nav2">
        <ul id="links13">
          <li>
            <a className='instalink' href="https://www.instagram.com/byjus_app/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a className='phlink' href="tel:+91-9243500460" target="_blank" rel="noopener noreferrer">
              <FaPhoneAlt />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar2;
