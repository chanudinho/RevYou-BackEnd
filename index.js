const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const researcherRouter = require('./src/researcher/researcherRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('Hello Word'));
app.use('/researcher', researcherRouter());

module.exports = app.listen(5000, console.log("ta rodando"));