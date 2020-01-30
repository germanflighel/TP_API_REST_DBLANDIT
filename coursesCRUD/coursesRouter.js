const coursesRouter = require('express').Router();

const { getCourses, createCourse, deleteCourse } = require('./coursesController');
const { getStudents, getTopStudent, sendStudents } = require('../studentsCRUD/studentsController');
const { courseValidator } = require('./coursesValidator');

coursesRouter.get('/', getCourses);
coursesRouter.post('/', courseValidator, createCourse);
coursesRouter.delete('/:course', deleteCourse);
coursesRouter.get('/:course/students', getStudents, sendStudents);
coursesRouter.get('/:course/students/top', getStudents, getTopStudent);


module.exports = coursesRouter;
