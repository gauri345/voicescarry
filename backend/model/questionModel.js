const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
});

const Question = module.exports = mongoose.model('question', questionSchema);

module.exports.get = function (callback, limit) {
    Question.find(callback).limit(limit);
};
