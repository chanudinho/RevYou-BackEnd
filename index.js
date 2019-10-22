require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const researcherRouter = require('./src/researcher/researcherRouter');
const studyRouter = require('./src/study/studyRouter');
const projectRouter = require('./src/project/projectRouter');
const invitationRouter = require('./src/invitation/invitationRouter');
const mainQuestionRouter = require('./src/mainQuestion/mainQuestionRouter');
const secondaryQuestionRouter = require('./src/secondaryQuestion/secondaryQuestionRouter');
const standardQueryRouter = require('./src/standardQuery/standardQueryRouter');
const searchKeywordRouter = require('./src/searchKeyword/searchKeywordRouter');
const selectionCriteriaRouter = require('./src/selectionCriteria/selectionCriteriaRouter');
const languagesRouter = require('./src/language/languageRouter');
const searchEngineRouter = require('./src/searchEngine/searchEngineRouter');
const adaptedQueryRouter = require('./src/adaptedQuery/adaptedQueryRouter');

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
app.use('/mainQuestion', mainQuestionRouter());
app.use('/secondaryQuestion', secondaryQuestionRouter());
app.use('/standardQuery', standardQueryRouter());
app.use('/searchKeyword', searchKeywordRouter());
app.use('/selectionCriteria', selectionCriteriaRouter());
app.use('/language', languagesRouter());
app.use('/searchEngine', searchEngineRouter());
app.use('/adaptedQuery', adaptedQueryRouter());

const swaggerDocument = require('./docs/documentation.json');
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000, console.log("all ready"));

module.exports = app