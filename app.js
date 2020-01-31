require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const coursesRouter = require('./coursesCRUD/coursesRouter');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.use('/courses', coursesRouter);

app.use('/', (req, res, next) => { res.status(200).json({code: 0, message: "Estás en la página de inicio"}) });

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/dblandit";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
    app.listen(port, () => { console.log(`Corriendo en port ${port}`) })
})
.catch(err => {
    console.log(err);
});
