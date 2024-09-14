import React, { useState, useEffect } from 'react';
import './Card.css'
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('/courses.json')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Error loading courses:', error));
  }, []);

  return (
    <div className="courses-container">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <img src={course.pic} alt={course.title} className="course-pic" />
          <div className="coursesBox">
            <div className="coursesBoxTop">
          <h2>{course.title}</h2>
          </div>
          <div className="coursesBoxCenter">
          <p>{course.descriptoion}</p>
          </div>
          <div className="coursesBoxBottom">
          <p>{course.age}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
