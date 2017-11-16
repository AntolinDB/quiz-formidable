var express = require('express');
var router = express.Router();

var quizesController = require('../controllers/quizes.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

// Autoload de comandos con :quizId
router.param('quizId', quizesController.load); // autoload :quizId

router.get('/quizes', quizesController.index);
router.get('/quizes/:quizId(\\d+)', quizesController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizesController.answer);

/*router.get('/quizes/question', quizesController.question);
router.get('/quizes/answer', quizesController.answer);*/

module.exports = router;
