const studentsRouter = require('express').Router();

const { getStudents } = require('./studentsController');


studentsRouter.get('/', getStudents);


module.exports = studentsRouter;
