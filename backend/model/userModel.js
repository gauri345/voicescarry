const mongoose = require('mongoose');

const userModel = mongoose.Schema({
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
