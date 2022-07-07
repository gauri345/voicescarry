const express = require('express');
const router = express.Router();
const QuestionController = require('../controller/QuestionController');
const SurveyController = require('../controller/SurveyController');
const FactoryController = require('../controller/FactoryController');
const AnswerController = require('../controller/AnswerController');
const SecurityController = require('../controller/SecurityController');
const RegistrationController = require('../controller/RegistrationController');
const FeedbackController = require('../controller/FeedbackController');
const UsersController = require('../controller/UsersController');

/* SECURITY & LOGIN */
router.route('/registration')
    .post(RegistrationController.registerUser);
router.route('/security/login')
    .post(SecurityController.login);

/* USERS ADMINISTRATION */
router.route('/users/all')
    .get(UsersController.getAllUsers);
router.route('/users/status/:userId')
    .get(UsersController.getUserStatus);
router.route('/users/status/:userId')
    .post(UsersController.changeUserStatus);
router.route('/users/:userId')
    .delete(UsersController.deleteUserById);


/* QUESTIONS MANAGEMENT */
router.route('/question/:id')
    .get(QuestionController.findById);

router.route('/question')
    .get(QuestionController.index)
    .post(QuestionController.post);

router.route('/question/:number')
    .delete(QuestionController.delete);

/* FACTORY MANAGEMENT */
router.route('/factory')
    .get(FactoryController.index)
    .post(FactoryController.post);

router.route('/factory/:id')
    .get(FactoryController.findById)

router.route('/factory/exists')
    .get(FactoryController.checkIfExists);

/* SURVEY MANAGEMENT */
router.route('/surveys/')
    .get(SurveyController.allSurveys);

router.route('/surveys/downloadAnswers/:surveyCode?')
    .get(SurveyController.downloadAnswers);

router.route('/surveys/filterByDate')
    .get(SurveyController.surveyListDateRange);

router.route('/surveys/answers/:surveyCode')
    .get(SurveyController.surveyAnswersByCode);

router.route('/survey/start/:factoryCode')
    .get(SurveyController.createSurvey)

router.route('/answer/storeBulk/')
    .get(AnswerController.index)
    .post(AnswerController.insertBulk);

/* FEEDBACK MANAGEMENT */
router.route('/feedback/download-all')
    .get(FeedbackController.downloadAll)

router.route('/feedback')
    .get(FeedbackController.index)
    .post(FeedbackController.post);

router.route('/feedback/:id')
    .delete(FeedbackController.delete);

module.exports = router;
