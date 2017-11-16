var express = require('express');
var router = express.Router();

var quizesController = require('../controllers/quizes.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizesController.question);
router.get('/quizes/answer', quizesController.answer);

module.exports = router;
