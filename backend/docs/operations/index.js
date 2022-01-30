const questions = require('./question');
const factories = require('./factory');

module.exports = {
    paths: {
        ...questions,
        ...factories
    }
}
