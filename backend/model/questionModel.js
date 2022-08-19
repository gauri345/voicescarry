const mongoose = require('mongoose');

const localizedContentSchema = mongoose.Schema({
    lang: {
        type: String,
        required: true,
        default: 'en'
    },
    content: {
        type: String,
        required: false
    }
});

const answer = mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    items: [
        {
            type: localizedContentSchema,
            required: true
        }
    ]
});

const questionSchema = mongoose.Schema({
    number: {
        type: Number,
        requireD: true
    },
    questionType: {
        type: String,
        required: true
    },
    titles: [
        {
            type: localizedContentSchema,
            required: true
        }
    ],
    additionalInformation: [
        {
            type: localizedContentSchema,
            required: true
        }
    ],
    answers: [
        {
            type: answer,
            required: true
        }
    ]
});

const Question = module.exports = mongoose.model('Question', questionSchema);

module.exports.get = function (callback, limit) {
    Question.find(callback).limit(limit);
};
