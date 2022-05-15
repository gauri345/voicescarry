const Feedback = require("../model/feedbackModel");
const AnswerModel = require("../model/answerModel");
const Question = require("../model/questionModel");

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
exports.delete = async function (req, res) {
    const feedbackId = req.params.id;

    try {
        const existingFeedback = await Feedback.findById(feedbackId);
        if (existingFeedback) {
            await Feedback.findByIdAndRemove(feedbackId);
            res
                .status(200)
                .json({
                    status: "success",
                    message: "Feedback with provided id: " + feedbackId + ' was deleted from the database.'
                });
        } else {
            res
                .status(404)
                .json({
                    status: "error",
                    message: "Feedback with provided id: " + feedbackId + ' not found in database.'
                });
        }
    } catch (error) {
        res.sendStatus(500).message(error);
    }
}
