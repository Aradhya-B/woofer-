// Require imports 
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());

const keys = require('./config/keys');
const Woof = require('./models/Woof');

mongoose.connect(keys.MONGODB_URI, () => {
    console.log('Connected to DB!');
})

app.get('/', (req, res) => {
    res.json({
        message: 'Woof! 🐶'
    });
});

function isValidWoof(woof) {
    return woof.name && woof.name.toString().trim() != '' && woof.content && woof.content.toString().trim() != '';
}

app.post('/woofs', async (req, res) => {
    if (isValidWoof(req.body)) {
        console.log('Valid woof being inserted');
        const woof = new Woof({
            name: req.body.name.toString(),
            content: req.body.content.toString(),
        });

        const savedWoof = await woof.save();
        res.json(savedWoof);
    } else {
        res.status(422);
        res.json({
            message: 'Name and content are required!'
        })
    }
});

app.listen(keys.PORT, () => {
    console.log('Listening on port: ', keys.PORT);
});