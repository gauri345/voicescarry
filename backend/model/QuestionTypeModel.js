const mongoose = require('mongoose');

const questionTypeSchema = mongoose.Schema({
    questionType: {
        type: String,
        required: true,
        default: 'en'
    },
    answerValues: [
        {
            type: String,
            required: true
        }
    ]
});

module.exports = mongoose.model('QuestionType', questionTypeSchema);
