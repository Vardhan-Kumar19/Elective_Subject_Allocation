import React, { useEffect, useState } from "react";
import axios from "axios";

export const Students = () => {
    const [studentsDetails, setStudentsDetails] = useState(null);
    const BASE_URL = 'http://localhost:5000';

    useEffect(() => {
        axios.get(`${BASE_URL}/students`)
            .then((resp) => {
                setStudentsDetails(resp.data);
            })
            .catch(error => {
                console.error("Error fetching students:", error);
            });
    }, [])

    return (
        <div>
            {studentsDetails && studentsDetails.length === 0 ? (
                <div>No students</div>
            ) : (
                <ul>
                    {studentsDetails && studentsDetails.map((student) => (
                        <li key={student._id}>
                            {student.studentName} ({student.studentID}, CGPA: {student.studentCGPA})
                            <ul>
                                <li>1st Choice: {student.firstChoice}</li>
                                <li>2nd Choice: {student.secondChoice}</li>
                                <li>3rd Choice: {student.thirdChoice}</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
