import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export const addStudent = async (studentData) => {
    try {
        const response = await axios.post(`${BASE_URL}/add-student`, studentData);
        return response.data;
    } catch (error) {
        console.error("Error adding student", error);
        throw error;
    }
};

// Add more API calls as needed
