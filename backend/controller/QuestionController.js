const Question = require('../model/questionModel');

// Handle index actions
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
            message: "Question retrieved successfully",
            data: questions
        });
    });
};


// Handle create question actions
exports.new = function (req, res) {

    const question = new Question();

    console.log("request", req.body);

    question.title = req.body.title;

    console.log("before storing: ", question);

    question.save(function (err) {

        if (err) res.json(err);

        console.log("Question: ", question);

        const response = {
            message: 'New contact created!',
            data: question
        };

        console.log("response: ", response);


        console.log("response.question", response.question);

        res.json(response);
    });
};