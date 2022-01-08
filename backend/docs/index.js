const basicInfo = require('./basicInfo');
const servers = require('./server')
const tags = require('./tags');
const components = require('./components');
const question = require('./question/')

module.exports = {
    ...basicInfo,
    ...servers,
    ...tags,
    ...components,
    ...question
};