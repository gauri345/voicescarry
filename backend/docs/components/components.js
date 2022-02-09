const {getAllQuestionsResponse, addQuestionResponse, deleteQuestionResponse} = require('./question');
const {getAllFactoriesResponse, addFactoryResponse, deleteFactoryResponse} = require('./factory');
const {getAllSurveyResponse} = require('./survey');


module.exports = {
    components: {
        schemas: {
            GetAllQuestionsResponse: getAllQuestionsResponse,
            AddQuestionResponse: addQuestionResponse,
            DeleteQuestionResponse: deleteQuestionResponse,
            GetAllFactoriesResponse: getAllFactoriesResponse,
            AddFactoryResponse: addFactoryResponse,
            DeleteFactoryResponse: deleteFactoryResponse,
            GetAllSurveyResponse: getAllSurveyResponse,

        }
    }
};