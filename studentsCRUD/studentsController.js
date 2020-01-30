const Student = require('../models/Student');
const Course = require('../models/Course');


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

module.exports = { sendStudents, getStudents, getTopStudent };
