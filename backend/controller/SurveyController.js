const Factory = require("../model/factoryModel");
const Survey = require("../model/surveryModel");
const {randomUUID} = require('crypto');

exports.createSurvey = async function (req, res) {
    const factoryCode = req.params.factoryCode;
    const existingFactory = await Factory.findOne({code: factoryCode});

    if (!existingFactory) {
        return res
            .status(404)
            .json({
                status: "failed",
                message: 'factory does not exists to start a survey.',
            });
    }

    const survey = await Survey.create(
        {
            "factoryCode": factoryCode,
            "surveyCode": randomUUID()
        }
    );

    res.json(
        {
            status: "success",
            message: 'survey created',
            data: survey
        }
    );
};


exports.storeSurvey = function (request, response) {

}