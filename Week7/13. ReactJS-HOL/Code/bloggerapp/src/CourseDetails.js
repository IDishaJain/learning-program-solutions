import React from 'react';

function CourseDetails(props) {
  return (
    <div style={{ flex: 1, borderRight: '2px solid green', padding: '10px' }}>
      <h2>Course Details</h2>
      {props.courses.map(course => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
