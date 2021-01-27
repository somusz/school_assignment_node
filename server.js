const CONFIG = require('./config');

const express = require('express');
const bodyParser = require("body-parser");
const router = require("./1_controllers/router");

const PORT = CONFIG.PORT;

// Creates an express server instance
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router());

app.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));