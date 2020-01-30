const mongoose = require('mongoose');

const Student = require('./Student');

const Course = new mongoose.Schema({
    year: Number,
    duration: Number,
    subject: String,
    students: [{ student : Student, grade: Number }]
});

module.exports = mongoose.model('Course', Course);
