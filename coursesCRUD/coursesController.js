const Course = require('../models/Course');
const { validationResult } = require('express-validator');



const getCourses = (req, res, next) => {

    const query = req.query || {};
    req.query.year ? query.year = req.query.year : null;
    req.query.duration ? query.duration = req.query.duration : null;

    Course.find( query )
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

const getCourse = (req, res, next) => {

    const course = req.params.course;

    Course.findById(course)
        .then(course => {
            if (!course) {
                res.status(400).json({
                    code: 10,
                    message: "Non existing course"
                });
            }
            req.course = course;
            next();
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })
};

const createCourse = (req, res, next) => {

    const errors = validationResult(req);


    const body = req.body;

    console.log(body);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 10,
            message: errors.array()
        })
    }

    console.log(errors);



    const newCourse = new Course({
        duration: body.duration,
        subject: body.subject,
        year: body.year
    });

    newCourse.save()
        .then(created => {
            res.status(201).json({
                code: 0,
                message: created
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

const deleteCourse = (req, res, next) => {

    const id = req.params.course;

    Course.findByIdAndDelete(id)
        .then((course) => {
            if(!course) {
                res.status(404).json({
                    code: 30,
                    message: "Non-existing course."
                });
                return;
            }
            res.status(200).json({
                code: 0,
                message: "Eliminated the course"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                code: 20,
                message: "Ocurrió un error con un módulo interno"
            });
        })

};

module.exports = { getCourses, createCourse, deleteCourse, getCourse };
