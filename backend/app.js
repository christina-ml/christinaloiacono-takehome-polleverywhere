// Dependencies
const express = require('express');
const cors = require('cors');

// Configuration
const app = express();

// Controllers
const rafflesController = require('./controllers/rafflesController.js');

// Middleware
app.use(express.json());
app.use(cors());
app.use('/raffles', rafflesController);

// Routes
app.get('/', (_req, res) => {
    res.send('Hello Poll Everywhere!')
});

app.get('*', (_req, res)=>{
    res.status(404).json({error: "404 Page not found."});
});

module.exports = app;