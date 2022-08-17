const QuestionType = require('../model/QuestionTypeModel');

exports.getAll = async function (req, res) {
    try {
        const allQuestions = await QuestionType.find();
        res
            .json(
                {
                    status: "success",
                    message: `Total ${allQuestions.length} question types retrieved`,
                    data: allQuestions
                }
            );
    } catch (error) {
        res
            .status(500)
            .json({
                status: "error",
                message: error
            });
    }
}

exports.post = async function (req, res) {
    const questionType = req.body;

    try {
        const existingQuestionType = await QuestionType.findById(questionType.id);

        if (existingQuestionType) {
            res.json(
                {
                    status: "success",
                    message: 'question type updated',
                    data: await QuestionType.findByIdAndUpdate(existingQuestionType.id, questionType)
                }
            );
        } else {
            res.json(
                {
                    status: "success",
                    message: 'question type added',
                    data: await QuestionType.create(questionType)
                }
            );
        }
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                status: "error",
                message: "Failed Storing question type in database."
            });
    }
};


exports.delete = async function (req, res) {
    const questionTypeId = req.params.id;

    try {
        const existingFactory = await QuestionType.findById(questionTypeId);
        if (existingFactory) {
            await QuestionType.findByIdAndRemove(questionTypeId);
            res
                .status(200)
                .json({
                    status: "success",
                    message: "Question type with provided id: " + questionTypeId + ' was deleted from the database.'
                });
        } else {
            res
                .status(404)
                .json({
                    status: "error",
                    message: "Question type with provided id: " + questionTypeId + ' not found in database.'
                });
        }
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({
                status: "error",
                message: "Failed deleting question type."
            });
    }
}


exports.findById = async function (req, res) {
    const questionTypeId = req.params.id;
    try {
        res.json(
            {
                status: "success",
                message: 'Question type found',
                data: await QuestionType.findById(questionTypeId)
            }
        );
    } catch (error) {
        res
            .status(404)
            .json({
                status: "error",
                message: "Question type with provided id: " + questionTypeId + ' not found in database.'
            });
    }
}

