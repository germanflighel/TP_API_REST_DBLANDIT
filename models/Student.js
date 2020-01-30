const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    name: String,
    surname: String,
    DNI: Number,
    address: String
});

module.exports = mongoose.model('Student', Student);
module.exports = Student;
