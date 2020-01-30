const Course = require('../models/Course');


const getCourses = (req, res, next) => {

    const query = req.query || {};

    Course.find(query).limit(10)
        .then(courses => {
            res.status(200).json({
                code: 0,
                message: courses
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

module.exports = { getCourses };
