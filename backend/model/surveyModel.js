const mongoose = require('mongoose');

const surveySchema = mongoose.Schema({
    factoryCode: {
        type: String,
        required: true
    },
    surveyCode: {
        type: String,
        required: true
    },
    surveyDate: {
        type: Date,
        required: true
    },
    questions: [
        {
            type: String,
            required: true
        }
    ]
});

const Survey = module.exports = mongoose.model('Survey', surveySchema);

module.exports.get = function (callback, limit) {
    Survey.find(callback).limit(limit);
};
