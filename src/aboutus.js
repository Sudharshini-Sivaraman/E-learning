import React from 'react';
import './aboutus.css';
function AboutUs() {
  return (
    <section className="home1">
      <div className="pg2">
        <div className="heading">
        <center><h1>Get the E-learn's advantage</h1></center>
        </div>
        <div className="pic1">
          <img src="./concept.png" width="300" alt="pic1" />
          <h2>Conceptual clarity through visualization</h2>
        </div>
        <div className="pic2">
          <img src="./personalised.png" width="300" alt="pic2" />
          <h2>Personalised learning programs</h2>
        </div>
        <div className="pic3">
          <img src="./unmatched.png" width="300" alt="pic3" />
          <h2>Unmatched individual attention</h2>
        </div>
      </div>
      <div className="pg3">
        <div className="heading2">
        <center><h1>Our students and parents love us</h1></center>
        </div>
        <div className="pic4">
          <img src="/ic.svg" width="100" alt="pic4" />
          <div className='h2'>
          <h2 >150+ Million</h2>
          <h2 >downloads</h2>
        </div>
        </div>
        <div className="pic5">
          <img src="/ic-app.svg" width="100" alt="pic5" />
          <h2>4.7+ Star</h2>
          <h2>app rating</h2>
        </div>
        <div className="pic6">
          <img src="/ic-cities.svg" width="100" alt="pic6" />
          <h2>1701+ Cities </h2>
          <h2>worldwide</h2>
        </div>
        <div className="pic7">
          <img src="/ic-time.svg" width="100" alt="pic7" />
          <h2>71 mins avg.</h2>
          <h2>time spent daily</h2>
        </div>
    
      </div>
    </section>
  );
}

export default AboutUs;
