'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookSchema = require('./models/book.model');
const {getUserHandler, addBook, deleteBook, updateBook} = require('./controller/book.controller');

const app = express();
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3030;

//connect the express server with mongodb
mongoose.connect(`${process.env.MONGO_URL}`, {useNewUrlParser: true, useUnifiedTopology: true});

//create a model
const bookModel = mongoose.model('Book', bookSchema);

app.get('/',homeHandler);
app.get('/books', getUserHandler);
app.post('/books', addBook);
app.delete('/books/:book_idx', deleteBook);
app.put('/books/:book_idx', updateBook);

function homeHandler(request,response){
    response.send('Home route!');
}

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})
