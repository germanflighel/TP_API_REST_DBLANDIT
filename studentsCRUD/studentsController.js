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

    console.log(errors);

    //TODO: Verificar que exista el curso y que el alumno no este anotado ya.

    const body = req.body;

    const newStudent = new Student({
        //TODO; Llenar con Student Model
    });

    newStudent.save()
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
module.exports = { sendStudents, getStudents, getTopStudent, createStudent };
