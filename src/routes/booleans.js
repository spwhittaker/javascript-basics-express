const express = require('express');

const router = express.Router();
const {
  negateController,
  truthinessController,
  isOddController,
  startsWithController,
} = require('../controllers/booleans');

router.post('/negate', negateController);

router.post('/truthiness', truthinessController);

router.get('/is-odd/:num', isOddController);

router.get('/:string0/starts-with/:string1', startsWithController);

module.exports = router;
