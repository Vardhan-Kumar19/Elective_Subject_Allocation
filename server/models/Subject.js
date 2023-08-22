const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },
    subjectID: {
        type: String,
        required: true
    },
    maxIntake: {
        type: Number,
        required: true
    },
    minIntake: {
        type: Number,
        required: true
    }
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;
