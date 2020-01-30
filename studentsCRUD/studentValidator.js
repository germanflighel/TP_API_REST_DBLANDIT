const { check } = require('express-validator');
const { Course } = require('../models/Student');

const studentValidator = [
    check('name').exists().withMessage("Must submit a Name"),
    check('surname').exists().withMessage("Must submit a Surname"),
    check('DNI').isNumeric().withMessage("Year field must by an Integer representing hours."),
    check('subject').exists().withMessage("A subject must be submitted."),
];

module.exports = { studentValidator };
