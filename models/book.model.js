'use strict'

const mongoose = require('mongoose');

/*
 We are going to use mongoose, to do two things:
    - Create the schema
    - generate the model
*/

//create a schema
const bookSchema = new mongoose.Schema({
    name:String,
    description:String,
    status:String
}); 

module.exports = bookSchema;
