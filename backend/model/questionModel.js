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
    slug: {
        type: String,
        required: true
    },

    titles: [
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
    slug: {
        type: String,
        required: true
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
    category: {
        type: categorySchema,
        required: true
    },
    additionalInformation: [
        {
            type: localizedContentSchema,
            required: true
        }
    ],
    answers: [
        {
            type: localizedContentSchema,
            required: true
        }
    ]
});

const Question = module.exports = mongoose.model('Question', questionSchema);

module.exports.get = function (callback, limit) {
    Question.find(callback).limit(limit);
};
