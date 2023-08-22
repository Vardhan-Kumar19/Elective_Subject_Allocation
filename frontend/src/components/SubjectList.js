import React from 'react';

function SubjectList({ subjects }) {
  return (
    <div className="subject-list">
      <h2>Selected Subjects</h2>
      <ul>
        {subjects.map((data, index) => (
          <li key={index}>
            {data.studentName} ({data.studentID}, CGPA: {data.studentCGPA}) choices are:
            <ul>
              <li>1st: {data.firstChoice}</li>
              <li>2nd: {data.secondChoice}</li>
              <li>3rd: {data.thirdChoice}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;
