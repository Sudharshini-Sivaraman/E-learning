import React from "react"
import { blog } from "./blog"
import "./footer.css";
import '@fortawesome/fontawesome-free/css/all.css';




const Footer = () => {
  return (
    <>
      
      <footer>
        <div className='container1'>
          <div className='box logo'>
            <h1>E-learn</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>“Education is the most powerful weapon which you can use to change the world.”</p> 
            <p>– Nelson Mandela</p>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About us</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items '>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                E-learn's, 2nd Floor, Tower D, IBC Knowledge Park, 4/1, Bannerghatta Main Road, Bengaluru, Karnataka, India.
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91-9243500460
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                Elearn@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved <i className='fa fa-heart'></i>
        </p>
      </div>
    </>
  )
}

export default Footer;