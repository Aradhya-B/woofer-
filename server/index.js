// Require imports 
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());

const keys = require('./config/keys');

app.listen(keys.PORT, () => {
    console.log('Listening on port: ', keys.PORT);
})