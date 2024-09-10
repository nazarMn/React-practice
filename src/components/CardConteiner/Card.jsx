import React, { useState, useEffect } from 'react';
import './Card.css'

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
          <h2>{course.title}</h2>
          <p>{course.descriptoion}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
