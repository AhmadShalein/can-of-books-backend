'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookSchema = require('./models/book.model');
const getUserHandler = require('./controller/book.controller');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3030;

//connect the express server with mongodb
mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});

//create a model
const bookModel = mongoose.model('Book', bookSchema);

app.get('/',homeHandler);
app.get('/books', getUserHandler);

function homeHandler(request,response){
    response.send('Home route!');
}

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})