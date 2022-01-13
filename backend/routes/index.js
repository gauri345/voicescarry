const express = require('express');
const router = express.Router();
const QuestionController = require('../controller/QuestionController');
const FactoryController = require('../controller/FactoryController');

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

module.exports = router;
