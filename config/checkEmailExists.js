var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function checkUserExists(email, cb){
    User.find({
        email: email
    }, function(err, docs){
        if(docs.length){
            cb('Email already exists', null)
        }
    })
};
