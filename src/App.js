import React from 'react';
import './navbar.css';
import Navbar from './navbar';
import Navbar2 from './navbar2';
import './navbar2.css';
import Footer from './Footer';
import './footer.css';
import './page2.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './aboutus';
import Login from './login';
import Page2 from './page2';
import Course from './course';

function App() {
  return (    
    <div className="header">
      <BrowserRouter>
        <Navbar />
        <Navbar2/>
        <Routes>
          <Route path="/" element={<Page2 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/course" element={<Course />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
