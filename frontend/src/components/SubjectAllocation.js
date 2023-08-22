import React, { useEffect, useState } from "react";
import axios from "axios";

export const SubjectAllocation = () => {
    const [allocations, setAllocations] = useState([]);
    const BASE_URL = 'http://localhost:5000';

    useEffect(() => {
        axios.get(`${BASE_URL}/allocate-subjects`)
            .then((resp) => {
                setAllocations(resp.data);
            })
            .catch(error => {
                console.error("Error fetching subject allocations:", error);
            });
    }, [])

    return (
        <div>
            <h2>Subject Allocations</h2>
            {allocations.map((allocation) => (
                <div key={allocation.subjectID}>
                    <h3>Subject: {allocation.subjectID}</h3>
                    <ul>
                        {allocation.students.map(studentID => (
                            <li key={studentID}>Student ID: {studentID}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
