const Question = require('../model/questionModel');

exports.index = function (req, res) {
    Question.get(function (err, questions) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: `Total ${questions.length} questions retrieved`,
            data: questions
        });
    });
};

exports.post = async function (req, res) {

    const question = req.body;

    const filter = {number: question.number};

    const existingQuestion = await Question.findOne(filter);

    if (existingQuestion) {
        res.json(
            {
                status: "success",
                message: 'Question updated',
                data: await Question.findOneAndUpdate(filter, question)
            }
        );
    } else {
        res.json(
            {
                status: "success",
                message: 'operations created!',
                data: await Question.create(req.body)
            }
        );
    }
};

exports.delete = async function (req, res) {
    const filter = {
        number: req.query.number
    };

    Question.remove(filter, function (err, question) {
        if (err)
            return res.send(
                {
                    status: "error",
                    message: err
                }
            );
        res.json(
            {
                status: "success",
                message: question.name + ' operations deleted'
            }
        );
    });
};
