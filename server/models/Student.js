const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    studentID: {
        type: String,
        required: true
    },
    studentCGPA: {
        type: Number,
        required: true
    },
    firstChoice: {
        type: String,
        required: true
    },
    secondChoice: {
        type: String,
        required: true
    },
    thirdChoice: {
        type: String,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
