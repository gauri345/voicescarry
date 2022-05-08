const express = require('express');
const router = express.Router();
const QuestionController = require('../controller/QuestionController');
const SurveyController = require('../controller/SurveyController');
const FactoryController = require('../controller/FactoryController');
const AnswerController = require('../controller/AnswerController');
const SecurityController = require('../controller/SecurityController');
const RegistrationController = require('../controller/RegistrationController');
const FeedbackController = require('../controller/FeedbackController');

router.route('/registration')
        .post(RegistrationController.registerUser);

router.route('/security/login')
    .post(SecurityController.login);

router.route('/question')
    .get(QuestionController.index)
    .post(QuestionController.post);

router.route('/question/:number')
    .delete(QuestionController.delete);

router.route('/factory')
    .get(FactoryController.index)
    .post(FactoryController.post);

router.route('/factory/exists')
    .get(FactoryController.checkIfExists);

router.route('/survey/start/:factoryCode')
    .get(SurveyController.createSurvey)

router.route('/answer/storeBulk/')
    .get(AnswerController.index)
    .post(AnswerController.insertBulk);

router.route('/feedback')
    .get(FeedbackController.index)
    .post(FeedbackController.post);

module.exports = router;
