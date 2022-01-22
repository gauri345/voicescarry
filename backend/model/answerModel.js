import mongoose from "mongoose";

const answerModel = mongoose.Schema({
    questionId: {
        type: String,
        required: true
    },

    language: {
        type: String,
        default: 'en',
        required: true
    },

    answer: {
        type: String,
        required: true
    }
});


const Answer = module.exports = mongoose.model('Answer', answerModel);

module.exports.get = function (callback, limit) {
    Answer.find(callback).limit(limit);
};
