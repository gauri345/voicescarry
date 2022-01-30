const {getAllQuestionsResponse, addQuestionResponse, deleteQuestionResponse} = require('./question');
const {getAllFactoriesResponse} = require('./factory');


module.exports = {
    components: {
        schemas: {
            GetAllQuestionsResponse: getAllQuestionsResponse,
            AddQuestionResponse: addQuestionResponse,
            DeleteQuestionResponse: deleteQuestionResponse,
            GetAllFactoriesResponse: getAllFactoriesResponse
        }
    }
};