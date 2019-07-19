const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const researcherRouter = require('./src/researcher/researcherRouter');
const studyRouter = require('./src/study/studyRouter');
const projectRouter = require('./src/project/projectRouter');
const invitationRouter = require('./src/invitation/invitationRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers',
   'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});

//routers
app.use('/researcher', researcherRouter());
app.use('/study', studyRouter());
app.use('/project', projectRouter());
app.use('/invitation', invitationRouter());

const swaggerDocument = require('./docs/documentation.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000, console.log("ta rodando"));

module.exports = app