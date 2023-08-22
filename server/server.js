const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/Student');
const Subject = require('./models/Subject');
const dotenv = require('dotenv');

const app = express();

app.use(cors());
app.use(express.json()); // This will allow us to get the data from a POST

dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.URL;

//Connect to MongoDB
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Test route
app.get('/', (req, res) => {
    res.send('Elective Subjects API');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.post('/add-student', (req, res) => {
    console.log(req.body);
    const studentData = new Student(req.body);
    studentData.save()
        .then(() => res.json('Student added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Route to get all students
app.get('/students', (req, res) => {
    Student.find()
        .then(students => {
            return res.json(students)
        })
        .catch(err => {
            console.log("error");
            return res.status(400).json(`Error: ${err}`)
        });
});

// Route to add a subject
app.post('/add-subject', (req, res) => {
    console.log(req.body);
    const subjectData = new Subject(req.body);
    subjectData.save()
        .then(() => res.json('Subject added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

// Route to get all subjects
app.get('/subjects', (req, res) => {
    Subject.find()
        .then(subjects => {
            return res.json(subjects)
        })
        .catch(err => {
            console.log("error");
            return res.status(400).json(`Error: ${err}`)
        });
});

// Route to allocate subjects
app.get('/allocate-subjects', async (req, res) => {
    try {
        const students = await Student.find().sort({ studentCGPA: -1 });
        const subjects = [
            { subjectID: "Graph Algorithms", maxIntake: 10 },
            { subjectID: "Embedded Systems", maxIntake: 10 },
            { subjectID: "Image Processing", maxIntake: 10 }
        ];

        let subjectAllocations = subjects.map(subject => {
            return {
                subjectID: subject.subjectID,
                students: [],
                maxIntake: subject.maxIntake
            };
        });

        for (let student of students) {
            let choices = [student.firstChoice, student.secondChoice, student.thirdChoice];
            for (let choice of choices) {
                let allocation = subjectAllocations.find(a => a.subjectID === choice);
                if (allocation && allocation.students.length < allocation.maxIntake) {
                    allocation.students.push(student.studentID);
                    break;
                }
            }
        }

        res.json(subjectAllocations);
    } catch (err) {
        res.status(400).json(`Error: ${err}`);
    }
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log("Successfully connected to MongoDB!");
});
