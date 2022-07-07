const Factory = require("../model/factoryModel");
const Question = require("../model/questionModel");

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

exports.findById = async function (req, res) {
    const factoryId = req.params.id;
    try {
        res.json(
            {
                status: "success",
                message: 'Factory found',
                data: await Factory.findById(req.params.id)
            }
        );
    } catch (error) {
        res
            .status(404)
            .json({
                status: "error",
                message: "Factory with provided id: " + factoryId + ' not found in database.'
            });
    }
}

exports.post = async function (req, res) {

    const factory = req.body;

    const filter = {name: factory.name};

    const existingFactory = await Factory.findOne(filter);

    if (existingFactory) {
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

    try {
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
    } catch (error) {
        res.sendStatus(500)
    }
}