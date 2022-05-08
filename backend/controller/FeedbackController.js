const Feedback = require("../model/feedbackModel");
const AnswerModel = require("../model/answerModel");

exports.index = function (req, res) {
    Feedback.get(function (err, content) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "feedback retrieved",
            data: content
        });
    });
};
exports.post = async function (req, res) {
    try {
        const feedback = await Feedback.create(req.body);
        res
            .status(201)
            .json(
                {
                    status: "success",
                    message: 'feedback stored',
                    data: feedback
                }
            )
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
};
