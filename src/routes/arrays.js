const express = require('express');

const router = express.Router();
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

router.post('/element-at-index/:ind', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.ind, req.body.array) });
});

router.post('/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

router.post('/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

router.post('/starts-with-vowel', (req, res) => {
  res.status(200).json({
    result: elementsStartingWithAVowel(req.body.array),
  });
});

router.post('/element-at-index/:ind', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.ind, req.body.array) });
});

router.post('/remove-element', (req, res) => {
  res.status(200).json({ result: removeNthElement2(req.query.index, req.body.array) });
});

module.exports = router;
