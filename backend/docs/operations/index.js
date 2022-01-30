const questions = require('./question');
const factories = require('./factory');
const  answers = require('./answer');

module.exports = {
    paths: {...questions, ...factories, ...answers}
}
