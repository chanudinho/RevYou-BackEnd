const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const researcherRouter = require('./src/researcher/researcherRouter');
const studyRouter = require('./src/study/studyRouter');
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/researcher', researcherRouter());
app.use('/study', studyRouter());

const swaggerDocument = require('./docs/documentation.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000, console.log("ta rodando"));

module.exports = app