const { check } = require('express-validator');
const { Course } = require('../models/Student');

const studentValidator = [
    check('name').exists().withMessage("Must submit a Name"),
    check('surname').exists().withMessage("Must submit a Surname"),
    check('address').exists().withMessage("Must submit an Adress").isString(),
    check('DNI').isNumeric().withMessage("DNI field must by an Integer."),
    check('grade').isNumeric().withMessage("Grade must be a Number")
];

module.exports = { studentValidator };
