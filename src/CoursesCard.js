import React from "react"
import "./courseCard.css"
import { courseCard } from "./courseCard";
import '@fortawesome/fontawesome-free/css/all.css';

const CoursesCard = () => {
  return (
    <>
      <section className='courseCard'>
      <div className='container3'>
          <h1> COURSES</h1>
          <h1>Browse our Online Courses</h1>
        <div className='container2'>
          {courseCard.map((val) => (
            <div className='items'>
              <div className='contentflex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                          <iframe title="YouTube Video" width="250" height="150" src={details.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              
              <button className='outline-btn'>ENROLL NOW !</button>
            </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  )
}

export default CoursesCard;