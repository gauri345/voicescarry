const Factory = require("../model/factoryModel");
const Survey = require("../model/surveyModel");
const {randomUUID} = require('crypto');

exports.createSurvey = async function (req, res) {
    try {
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
                "surveyCode": randomUUID(),
                "surveyDate": Date.now()
            }
        );

        res.json(
            {
                status: "success",
                message: 'survey created',
                data: survey
            }
        );
    } catch (error) {
        res.sendStatus(500)
    }
};
