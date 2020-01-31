const Student = require('../models/Student');
const Course = require('../models/Course');
const { validationResult } = require('express-validator');


const getStudents = (req, res, next) => {

    const course = req.params.course;

    Course.findById(course)
        .then(course => {
            req.students = course.students;
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

const sendStudents = (req, res, next) => {
    res.status(200).json({
        code: 0,
        message: req.students
    });
};


const getTopStudent = (req, res, next) => {
    res.status(200).json({
        code: 0,
        message: req.students.sort((a, b) => parseFloat(b.grade) - parseFloat(a.grade))[0]
    });
};

const createStudent = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            code: 10,
            message: errors.array()
        })
    }

    const course = req.course;

    const body = req.body;

    const aStudent = {
        student: {
            name: body.name,
            surname: body.surname,
            DNI: body.DNI,
            address: body.address,
        },
        grade: body.grade,
    };

    if (course.students.contains(aStudent)) {
        return res.status(400).json({
            code: 10,
            message: "The Student is already in the Course"
        });
    }

    course.students.push(aStudent);
    course.save()
        .then(modified => {
        res.status(200).json({
            code: 0,
            message: modified
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
module.exports = { sendStudents, getStudents, getTopStudent, createStudent };
