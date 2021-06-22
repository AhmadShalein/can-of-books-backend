'use strict';

const userModel = require('../models/user.model');

function getUserHandler(request,response){
    let userEmail = request.query.email;
    userModel.find({email:userEmail},function(error,userData){
        if(error){
            console.log('something went wrong');
        }
        else
        {
            // console.log(userData[0].books);
            response.send(userData[0].books);
        }
    })
}

module.exports = getUserHandler;
