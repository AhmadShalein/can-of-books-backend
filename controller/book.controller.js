'use strict';

const userModel = require('../models/user.model');

function getUserHandler(request,response){
    let userEmail = request.query;
    userModel.find({email:userEmail},function(error,userData){
        if(error){
            console.log('something went wrong');
        }
        else
        {
            // console.log(userData[0].book);
            response.send(userData[0].book);
        }
    })
}

module.exports = getUserHandler;