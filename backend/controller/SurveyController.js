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

/**
 * Will create new or updates an existing survey.
 * The request can look as follows:
 * {
 *     "surveyId": "3446457564",
 *     "factoryCode": "vaude",
 *     "surveyCode": "dgfdgfdg",
 *     "surveyDate": "2020-02-02",
 *     "questions": ['6205a8d53abec2d01df3db37', '6205a8e03abec2d01df3db45', '6205a8e93abec2d01df3db53']
 * }
 */
exports.addSurvey = async function (req, res) {
    try {

        const survey = req.body;

        const existingFactory = await Survey.findOne({code: survey.factoryCode});

        if (!existingFactory) {
            return res
                .status(404)
                .json({
                    status: "failed",
                    message: 'factory does not exists to create or update a survey.',
                });
        }

        const storedSurvey = await Survey.updateOne(
            {_id: survey.surveyId},
            survey,
            {upsert: true, setDefaultsOnInsert: true}
        );

        res.json(
            {
                status: "success",
                message: 'survey created',
                data: storedSurvey
            }
        );
    } catch (error) {
        return res
            .status(500)
            .json({
                status: "failed",
                message: error,
            });
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

    try {
        let answers, fileName;

        if (!surveyCode) {
            answers = await AnswerModel.find();
            fileName = `${__dirname}/survey_answers.json`;
        } else {
            answers = await AnswerModel.find({surveyCode: surveyCode});
            fileName = `${__dirname}/${surveyCode}.json`;
        }

        fs
            .writeFile(fileName, JSON.stringify(answers), 'utf8')
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

exports.downloadFilteredSurveyAnswers = async function (req, res) {
    try {

        const dateFrom = req.params.dateFrom;
        const dateTo = req.params.dateTo;

        const filteredSurveys = await Survey.find({ //query today up to tonight
            surveyDate: {
                $gte: dateFrom,
                $lt: dateTo
            }
        });

            const fileName = `${__dirname}/survey_answers.json`;
        fs
            .writeFile(fileName, JSON.stringify(filteredSurveys), 'utf8')
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

exports.filteredSurveyAnswerList = async function (req, res) {
    try {
        const dateFrom = req.body.dateFrom;
        const dateTo = req.body.dateTo;

        const filteredSurveys = await Survey.find({ //query today up to tonight
            surveyDate: {
                $gte: dateFrom,
                $lt: dateTo
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
