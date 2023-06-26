
import React from 'react';
import{Link} from "react-router-dom";
import "./Home.css";

function Home(){
    return(
        
       <section className='home'>
        <div className='home'> 
        <div className='page1'>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1>Marketing Analysis
        <br/>
        of India's No 1 EdTech Platform</h1>
        <br/><br/>
        <h2>Comprehensive learning programs
        <br/>
        & classes for all students</h2>
        <br/><br/><br/>
        <div className='hd2'>
        <h2>Comprehensive learning programs & classes for all students</h2>
        </div>
        <div className='hd3'>
        <h2>Become lifelong learners with India's best teachers,
        <br/>engaging video lessons and personalised learning journeys</h2>
        </div>
        </div>
        <div className="btn3">
        <button id="btn3"><Link to="/login">LOGIN</Link></button>
        </div>
        
       
        </div>
        
        
        </section>
       
    )
} 
export default Home;