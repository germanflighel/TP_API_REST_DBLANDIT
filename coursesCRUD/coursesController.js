const Course = require('../models/Course');


const getCourse = (req, res, next) => {
    res.status(200).json({
        code: 0,
        message: 'Welcome',
    })
};

module.exports = { getCourse };
