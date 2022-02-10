const AnswerModel = require("../model/answerModel");

exports.index = function (req, res) {
    AnswerModel.get(function (err, questions) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "answer retrieved",
            data: questions
        });
    });
};

exports.insertBulk = async function (req, res) {
    try {
        res
            .status(201)
            .json(
                {
                    status: "success",
                    message: 'answers stored',
                    data: AnswerModel.insertMany(req.body)
                }
            )
    } catch (error) {
        res.sendStatus(500)
    }
};
