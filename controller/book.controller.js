'use strict'

const userModel = require('../models/user.model');

function getUserHandler(request,response){
    let email = request.query.email;
    userModel.findOne({email:email},function(error,userData){
        if(error){
            console.log('something went wrong');
            // response.send(error)
        }
        else
        {
            // console.log(userData.books);
            response.send(userData.books);
        }
    })
}

function addBook(request,response){
    const {email, name, description, status} = request.body;
    console.log(request.body)
    userModel.findOne({email:email},function(error,userData){
        if(error){
            console.log('something went wrong');
            response.send(error)
        }
        else
        {
            // console.log(userData.books);
            userData.books.push({name : name , description : description , status :status})
            userData.save();
            response.send(userData.books);
        }
    })
}

function deleteBook(request,response){
    // console.log(request.params)
    const bookIndex = request.params.book_idx;
    const email = request.query.email;

    userModel.findOne({email:email},function(error,userData){
        if (error) {
            response.send(error)
        } else {
            userData.books.splice(bookIndex, 1);
            userData.save();
            response.send(userData.books)
        }

    })
}

function updateBook(request,response){
    const bookIndex = request.params.book_idx;
    const {email, name, description, status} = request.body;
    userModel.findOne({email:email},function(error,userData){
        if(error){
            console.log('something went wrong');
            response.send(error)
        }
        else
        {
            userData.books.splice(bookIndex, 1, {name, description, status});
            userData.save();
            response.send(userData.books)
        }
    })
}

module.exports = {getUserHandler,addBook,deleteBook, updateBook};