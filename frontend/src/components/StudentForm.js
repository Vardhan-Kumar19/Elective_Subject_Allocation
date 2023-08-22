import { addStudent } from '../api';
import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SubjectForm({ onAdd, subjects }) {
  const [studentName, setStudentName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [studentCGPA, setStudentCGPA] = useState('');
  const [firstChoice, setFirstChoice] = useState('');
  const [secondChoice, setSecondChoice] = useState('');
  const [thirdChoice, setThirdChoice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const studentData = {
      studentName: studentName,  // get these from your form state or refs
      studentID: studentID,
      studentCGPA: studentCGPA,
      firstChoice: firstChoice,
      secondChoice: secondChoice,
      thirdChoice: thirdChoice
    };

    try {
      if (studentData.firstChoice !== studentData.secondChoice && studentData.secondChoice !== studentData.thirdChoice && studentData.firstChoice !== studentData.thirdChoice) {
        await addStudent(studentData);
        setStudentCGPA('');
        setStudentID('');
        setStudentName('');
        setFirstChoice('');
        setSecondChoice('');
        setThirdChoice('');
        alert("Student added successfully!");
      }
      else {
        alert("Entered same!!!");
      }
      // Clear the form or navigate to another page, etc.
    } catch (error) {
      alert("Error adding student. Please try again.");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Student Name"
          variant="outlined"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Student ID"
          variant="outlined"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Student CGPA"
          variant="outlined"
          value={studentCGPA}
          onChange={(e) => setStudentCGPA(e.target.value)}
          fullWidth
          margin="normal"
          required
        />

        {[firstChoice, secondChoice, thirdChoice].map((choice, index) => (
          <FormControl fullWidth variant="outlined" margin="normal" key={index} mt={3}>
            <InputLabel>{`Choice ${index + 1}`}</InputLabel>
            <Select
              value={choice}
              onChange={(e) => {
                if (index === 0) setFirstChoice(e.target.value);
                if (index === 1) setSecondChoice(e.target.value);
                if (index === 2) setThirdChoice(e.target.value);
              }}
              label={`Choice ${index + 1}`}
              required
            >
              {subjects.map(subject => (
                <MenuItem key={subject} value={subject}>
                  {subject}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}

        <Button type="submit" variant="contained" color="primary" mt={2}>Submit</Button>
      </form>
    </div>
  );
}

export default SubjectForm;
