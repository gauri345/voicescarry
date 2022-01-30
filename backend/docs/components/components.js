const question = require('./question');
const error = require('./error');

const questionResponse = {
    type: "object",
    properties: {
        status: {
            type: "string",
            description: "Status of the request",
            example: "success"
        },
        message: {
            type: "string",
            description: "Message describing the response",
            example: "Questions retrieved"
        },
        data: {
            type: "array",
            items: question
        }
    }
};

const addQuestionResponse = {
    type: "object",
    properties: {
        status: {
            type: "string",
            description: "Status of the request",
            example: "success"
        },
        message: {
            type: "string",
            description: "Message describing the response",
            example: "Questions added"
        },
        data: {
            type: "object",
            items: question
        }
    }
};

const deleteQuestion = {
    type: "object",
    properties: {
        status: {
            type: "string",
            description: "Status of the request",
            example: "success"
        },
        message: {
            type: "string",
            description: "Message describing the response",
            example: "Question deleted"
        }
    }
};

const factory = {
    type: "object",
    properties: {
        _id: {
            type: "string",
            description: "factory identification number",
            example: "61e34633384df7782b1dafc0",
        },
        name: {
            type: "string",
            description: "name of factory",
            example: "vaude",
        },
        code: {
            type: "string",
            description: "factory related code",
            example: "1234",
        }
    }
};

const factoryResponse = {
    type: "object",
    properties: {
        status: {
            type: "string",
            description: "Status of the request",
            example: "success"
        },
        message: {
            type: "string",
            description: "Message describing the response",
            example: "Factory retrieved"
        },
        data: {
            type: "array",
            items: factory,
        }
    }
};

module.exports = {
    components: {
        schemas: {
            QuestionResponse: questionResponse,
            AddQuestion: addQuestionResponse,
            DeleteQuestion: deleteQuestion,
            FactoryResponse: factoryResponse,
            Error: error,
        },
    }
};