const Factory = require("../model/answerModel");

exports.index = function (req, res) {
    Factory.get(function (err, questions) {
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


exports.post = async function (req, res) {

    const answer = req.body;

    const filter = {name: answer.name};

    const existingQuestion = await Factory.findOne(filter);

    if (existingQuestion) {
        res.json(
            {
                status: "success",
                message: 'answer updated',
                data: await Factory.findOneAndUpdate(filter, factory)
            }
        );
    } else {
        res.json(
            {
                status: "success",
                message: 'answer added',
                data: await Factory.create(req.body)
            }
        );
    }
};