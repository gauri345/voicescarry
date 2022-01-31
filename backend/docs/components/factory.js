const factory = require('./models/factory.js');
const question = require("./models/question");

const getAllFactoriesResponse = {
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
const addFactoryResponse = {
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
            example: "Factory added"
        },
        data: question
    }
};


module.exports = {getAllFactoriesResponse, addFactoryResponse};