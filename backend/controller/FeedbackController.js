const Feedback = require("../model/feedbackModel");
const {promises: fs} = require("fs");

exports.downloadAll = async function (req, res) {

    try {
        const feedbackList = await Feedback.find();
        const fileName = `${__dirname}/feedbacks.json`;
        fs.writeFile(fileName, JSON.stringify(feedbackList), 'utf8')
            .finally(async () => res.download(fileName, async () => await fs.unlink(fileName)));
    } catch (error) {
        res
            .status(500)
            .json({
                status: "error",
                message: "Failed downloading file. Please contact your administrator."
            });
    }
};

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
