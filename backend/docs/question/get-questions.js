module.exports = {
    get: {
        tags: ["Question CRUD operations"],
        description: "Get Questions",
        operationId: "getQuestions",
        parameters: [],
        responses: {
            200: {
                description: "Todos were obtained",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Question",
                        },
                    },
                },
            },
        },
    },
};
