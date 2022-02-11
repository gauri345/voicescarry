const mongoose = require('mongoose');

const answerModel = mongoose.Schema({
    questionId: {
        type: String,
        required: true
    },

    questionNumber: {
        type: String,
        required: true
    },

    answerValue: {
        type: String,
        required: true
    },

    answerText: {
        type: String,
        required: true
    },

    factoryCode: {
        type: String,
        required: true
    },

    surveyCode: {
        type: String,
        required: true
    }
});

const Answer = module.exports = mongoose.model('Answer', answerModel);

module.exports.get = function (callback, limit) {
    Answer.find(callback).limit(limit);
};
