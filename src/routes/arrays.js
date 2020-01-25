const express = require('express');

const router = express.Router();
const {
  getNthElementController,
  arrayToStringController,
  appendController,
  startsWithVowelController,
  removeNthElementController,
} = require('../controllers/arrays');

router.post('/element-at-index/:ind', getNthElementController);

router.post('/to-string', arrayToStringController);

router.post('/append', appendController);

router.post('/starts-with-vowel', startsWithVowelController);

router.post('/remove-element', removeNthElementController);

module.exports = router;
