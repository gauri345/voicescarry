const mongoose = require('mongoose');

const answerTypeSchema = mongoose.Schema({
    answerType: {
        type: String,
        required: true
    },
    answerValues: [{
        type: String,
        required: true
    }]
});

const AnswerType = module.exports = mongoose.model('AnswerType', answerTypeSchema);

module.exports.get = function (callback, limit) {
    AnswerType.find(callback).limit(limit);
};

