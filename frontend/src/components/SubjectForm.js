import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

function SubjectForm() {
  const [subjectName, setSubjectName] = useState('');
  const [subjectID, setSubjectID] = useState('');
  const [maxIntake, setMaxIntake] = useState('');
  const [minIntake, setMinIntake] = useState('');

  const BASE_URL = 'http://localhost:5000';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const subjectData = {
      subjectName: subjectName,
      subjectID: subjectID,
      maxIntake: maxIntake,
      minIntake: minIntake
    };
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Subject Name"
          variant="outlined"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Subject ID"
          variant="outlined"
          value={subjectID}
          onChange={(e) => setSubjectID(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Max Intake"
          variant="outlined"
          value={maxIntake}
          onChange={(e) => setMaxIntake(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Min Intake"
          variant="outlined"
          value={minIntake}
          onChange={(e) => setMinIntake(e.target.value)}
          fullWidth
          margin="normal"
          required
        />

        <Button type="submit" variant="contained" color="primary" fullWidth mt={3}>Submit</Button>
      </form>
    </div>
  );
}

export default SubjectForm;
