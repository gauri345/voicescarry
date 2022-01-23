module.exports = {
    get: {
        tags: ["Manage Questions "],
        description: "Fetch all questions",
        operationId: "allQuestions",
        parameters: [],
        responses: {
            200: {
                description: "List of all available questions",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/QuestionResponse",
                        },
                    },
                },
            },
        },
    },
};
