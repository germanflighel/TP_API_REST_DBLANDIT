const coursesRouter = require('express').Router();

const { getCourses } = require('./coursesController');


coursesRouter.get('/', getCourses);


module.exports = coursesRouter;
