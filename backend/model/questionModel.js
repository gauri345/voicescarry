const mongoose = require('mongoose');

const localizedContentSchema = mongoose.Schema({
    lang: {
        type: String,
        required: true,
        default: 'en'
    },
    content: {
        type: String,
        required: true
    }
});

const categorySchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },

    title: [
        {
            type: localizedContentSchema,
            required: true
        }
    ]
});

const questionSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: [
        {
            type: localizedContentSchema,
            required: true
        }
    ],
    category: [
        {
            type: categorySchema,
            required: true
        }
    ],
    type: {
        type: String,
        required: true
    },
    additionalInformation: {
        type: String,
        required: true
    },
    answers: [String]
});

const Question = module.exports = mongoose.model('question', questionSchema);

module.exports.get = function (callback, limit) {
    Question.find(callback).limit(limit);
};
