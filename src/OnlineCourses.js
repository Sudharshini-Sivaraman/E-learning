import React from "react";
import "./OnlineCourses.css";
import { online } from "./online";
const OnlineCourses = () => {
  return (
      <section className='online'>
        <div className='container'>
          <h1> COURSES</h1>
          <h1>Browse our Online Courses</h1>
          <div className='content'>
          {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

  )
}
export default OnlineCourses;
