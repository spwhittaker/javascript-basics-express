const express = require('express');
const { firstCharacter, firstCharacters } = require('../lib/strings');

const { hello, upper, lower, stringQuery } = require('../controllers/strings');

const router = express.Router();

router.get('/hello/:string', hello);

router.get('/upper/:string', upper);

router.get('/lower/:string', lower);

router.get('/first-characters/:string?', stringQuery);

module.exports = router;
