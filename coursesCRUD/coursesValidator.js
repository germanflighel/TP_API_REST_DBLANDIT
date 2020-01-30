const { check } = require('express-validator');

const courseValidator = [
    check('duration').isNumeric().withMessage("Duration field must by an Integer representing hours."),
    check('year').isNumeric().withMessage("Year field must by an Integer representing hours."),
    check('subject').exists().withMessage("A subject must be submitted."),
];

module.exports = { courseValidator };
