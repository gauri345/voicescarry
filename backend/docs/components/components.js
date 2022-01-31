const {getAllQuestionsResponse, addQuestionResponse, deleteQuestionResponse} = require('./question');
const {getAllFactoriesResponse, addFactoryResponse} = require('./factory');


module.exports = {
    components: {
        schemas: {
            GetAllQuestionsResponse: getAllQuestionsResponse,
            AddQuestionResponse: addQuestionResponse,
            DeleteQuestionResponse: deleteQuestionResponse,
            GetAllFactoriesResponse: getAllFactoriesResponse,
            AddFactoryResponse: addFactoryResponse,
        }
    }
};