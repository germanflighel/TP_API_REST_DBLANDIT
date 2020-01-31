const coursesRouter = require('express').Router();

const { getCourses, createCourse, deleteCourse, getCourse } = require('./coursesController');
const { getStudents, getTopStudent, sendStudents, createStudent } = require('../studentsCRUD/studentsController');
const { courseValidator } = require('./coursesValidator');
const { studentValidator } = require('../studentsCRUD/studentValidator');

coursesRouter.get('/', getCourses);
coursesRouter.post('/', courseValidator, createCourse);
coursesRouter.delete('/:course', deleteCourse);
coursesRouter.get('/:course/students', getStudents, sendStudents);
coursesRouter.post('/:course/student', studentValidator, getCourse, createStudent);
coursesRouter.get('/:course/students/top', getStudents, getTopStudent);


module.exports = coursesRouter;
