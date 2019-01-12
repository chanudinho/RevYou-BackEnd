const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send('Hello Word'));


module.exports = app.listen(6969, console.log("ta rodando"));