const factory = require('./models/factory');

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

module.exports = [getAllFactoriesResponse];