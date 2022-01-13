const Factory = require("../model/factoryModel");

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
            message: "factories retrieved",
            data: questions
        });
    });
};

exports.post = async function (req, res) {

    const factory = req.body;

    const filter = {name: factory.name};

    const existingQuestion = await Factory.findOne(filter);

    if (existingQuestion) {
        res.json(
            {
                status: "success",
                message: 'factory updated',
                data: await Factory.findOneAndUpdate(filter, factory)
            }
        );
    } else {
        res.json(
            {
                status: "success",
                message: 'factory added',
                data: await Factory.create(req.body)
            }
        );
    }
};

exports.checkIfExists = async function (req, res) {
    const factoryCode = req.query.code;

    const filter = {code: factoryCode};

    return Factory.exists(filter, function (err, doc) {
        if (err) {
            console.log(err);
            return res.sendStatus(404);
        } else if (!doc) {
            return res.sendStatus(404);
        } else {
            res.json(
                {
                    status: "success",
                    message: 'factory exists',
                    data: filter
                }
            );
        }
    });
}