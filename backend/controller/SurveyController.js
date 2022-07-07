const Factory = require("../model/factoryModel");
const Survey = require("../model/surveyModel");
const {randomUUID} = require('crypto');
const AnswerModel = require("../model/answerModel");
const fs = require('fs').promises;

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

exports.allSurveys = async function (req, res) {
    try {
        const allSurveys = await Survey.find();
        res
            .status(200)
            .json(
                {
                    status: "success",
                    message: `Total [${allSurveys.length}] surveys received`,
                    data: allSurveys
                }
            )
    } catch (error) {
        res
            .status(404)
            .json({
                status: "error",
                message: `Error occurred while fetching the surveys from database [${error}}].`
            });
    }
}

exports.downloadAnswers = async function (req, res) {
    const surveyCode = req.params.surveyCode;

    if (!surveyCode) {
        res
            .status(400)
            .json({
                status: "error",
                message: 'Survey code is required to download answers.'
            });
    } else {
        try {
            const answers = await AnswerModel.find({surveyCode: surveyCode});
            const fileName = `${__dirname}/${surveyCode}.json`;
            fs.writeFile(fileName, JSON.stringify(answers), 'utf8')
                .finally(async () => res.download(fileName, async () => await fs.unlink(fileName)));
        } catch (error) {
            res
                .status(500)
                .json({
                    status: "error",
                    message: "Failed downloading file. Please contact your administrator."
                });
        }
    }
}

exports.surveyAnswersByCode = async function (req, res) {
    const surveyCode = req.params.surveyCode;

    if (!surveyCode) {
        res
            .status(400)
            .json({
                status: "error",
                message: 'Survey code is required to download answers.'
            });
    } else {

        try {
            const answers = await AnswerModel.find({surveyCode: surveyCode});

            res
                .status(200)
                .json(
                    {
                        status: "success",
                        message: `Total [${answers.length}] answers received`,
                        data: answers
                    }
                )
        } catch (error) {
            res
                .status(404)
                .json({
                    status: "error",
                    message: `Error occurred while fetching the survey answers from database [${error}}].`
                });
        }
    }
}

exports.surveyListDateRange = async function (req, res) {
    try {
        const dateFrom = req.body.dateFrom;
        const dateTo = req.body.dateTo;

        console.log("from request", dateFrom, dateTo)

        const filteredSurveys = await Survey.find({ //query today up to tonight
            created_on: {
                $gte: Date.parse(dateFrom),
                $lt: Date.parse(dateTo)
            }
        });
        res
            .status(200)
            .json(
                {
                    status: "success",
                    message: `Total [${filteredSurveys.length}] surveys received`,
                    data: filteredSurveys
                }
            )
    } catch (error) {
        res
            .status(404)
            .json({
                status: "error",
                message: `Error occurred while fetching the surveys from database [${error}}].`
            });
    }
}
