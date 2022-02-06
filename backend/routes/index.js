const express = require('express');
const router = express.Router();
const QuestionController = require('../controller/QuestionController');
const SurveyController = require('../controller/SurveyController');
const FactoryController = require('../controller/FactoryController');

router.route('/question')
    .get(QuestionController.index)
    .post(QuestionController.post);

router.route('/operations/:number')
    .delete(QuestionController.delete);

router.route('/factory')
    .get(FactoryController.index)
    .post(FactoryController.post);

router.route('/factory/exists')
    .get(FactoryController.checkIfExists);

router.route('/survey/start/:factoryCode').get(SurveyController.createSurvey)

module.exports = router;
