import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import { Container, CssBaseline, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SUBJECTS = ["Graph Algorithms", "Embedded Systems", "Image Processing"];

export const Home = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const addStudentChoices = (studentData) => {
        setStudents([...students, studentData]);
    }

    return (
        <Container>
            <CssBaseline />
            <Box mt={8}>
                <Typography variant="h3" gutterBottom>Elective Subject Selection</Typography>
                <Box display="flex" mt={3}>
                    <Box flex="1" pr={3}>
                        <Typography variant="h5" gutterBottom>Available Subjects</Typography>
                        {SUBJECTS.map(subject => (
                            <Typography variant="body1" key={subject} gutterBottom>{subject}</Typography>
                        ))}
                        <Button onClick={() => { navigate('/allocations') }}>Allocate</Button>
                    </Box>
                    <Box flex="3">
                        <Box mt={3}>
                            <Typography variant="h5" gutterBottom>FORM</Typography>
                            <StudentForm onAdd={addStudentChoices} subjects={SUBJECTS} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
