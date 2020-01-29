const coursesRouter = require('express').Router();

const { getCourse } = require('./coursesController');


coursesRouter.get('/', getCourse);


module.exports = coursesRouter;
