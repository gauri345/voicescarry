const express = require('express');
const router = express.Router();
const QuestionController = require('../controller/QuestionController');

router.route('/questions')
    .get(QuestionController.index)
    .post(QuestionController.new);

module.exports = router;
