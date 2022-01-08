module.exports = {
    components: {
        schemas: {
            // id model
            id: {
                type: "string",
                description: "An id of a Question",
                example: "tyVgf",
            },
            // question model
            Question: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "Question identification number",
                        example: "ytyVghsdfsdfd",
                    },
                    title: {
                        type: "string",
                        description: "The title of question in english",
                        example: "Coding in JavaScript",
                    }
                },
            },
            // error model
            Error: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                        description: "Error message",
                        example: "Not found",
                    },
                    internal_code: {
                        type: "string",
                        description: "Error internal code",
                        example: "Invalid parameters",
                    },
                },
            },
        },
    },
};