const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    name: String,
    surname: String,
    DNI: Number,
    cast: [String],
    address: String
});

module.exports = mongoose.model('Student', Student);
