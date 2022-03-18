const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    fullName:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        telephone:{
            type:Number,
            required:true
        },
        email: {
            type: String,
            required: true
        },
        password:{
            type:String,
            required:true
        }
});


const User = module.exports = mongoose.model('User', userModel);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
};
