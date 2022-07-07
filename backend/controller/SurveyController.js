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

exports.allSurveys =  async function(req, res) {
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

exports.downloadAnswers = async function(req, res) {
    const surveyCode = req.params.surveyCode;

    console.log(__dirname);
    console.log(surveyCode);

    if (!surveyCode) {
        res
            .status(400)
            .json({
                status: "error",
                message: 'Survey code is required to download answers.'
            });
    } else {
        const answers = await AnswerModel.find({surveyCode: surveyCode});
        const fileName = `${__dirname}/${surveyCode}.json`;
        fs.writeFile(fileName, JSON.stringify(answers), 'utf8')
            .then(res.download(fileName))
            .finally(async () => await fs.unlink(fileName));
    }
}
