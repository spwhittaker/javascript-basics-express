const express = require('express');

const router = express.Router();
const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

router.post('/negate', (req, res) => {
  res.status(200).json({ result: negate(Boolean(req.body.value)) });
});

router.post('/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

router.get('/is-odd/:num', (req, res) => {
  if (Number.isNaN(Number(req.params.num))) {
    console.log(req.params.num);
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
  res.status(200).json({ result: isOdd(req.params.num) });
});

router.get('/:string0/starts-with/:string1', (req, res) => {
  if (req.params.string1.length !== 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).json({ result: startsWith(req.params.string1, req.params.string0) });
});

module.exports = router;
