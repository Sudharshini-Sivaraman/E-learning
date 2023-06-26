import React from "react";
import "./page2.css";
import Home from "./Home";
import { Link } from "react-router-dom";

function Page2() {
  return (
    <div className="bg">
      <h2>Learn from Today</h2>
      <br />
      <h1>Best   Academic</h1>
      <h1>Online  Learning</h1>
      <h1>Platform</h1>
      <br />
      <br />
      <p>E-Learn is an online learning platform that offers various courses for your skill development.</p>
      <div className="btn2">
        <button id=""><Link to="/Home">START NOW</Link></button>
      </div>
    </div>
  );
}

export default Page2;
