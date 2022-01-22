const getQuestions = require('./get-questions');

module.exports = {
    paths: {
        '/question': {
            ...getQuestions
        }
    }
}
