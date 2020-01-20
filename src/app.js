const express = require('express');

const app = express();

app.use(express.json());

const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./strings');
const { add, subtract, multiply, divide, remainder } = require('./numbers');
const { negate } = require('./booleans');

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string?', (req, res) => {
  if (req.query.length) {
    res.json({
      result: firstCharacters(req.params.string, req.query.length),
    });
  } else {
    res.json({
      result: firstCharacter(req.params.string),
    });
  }
});

app.get('/numbers/add/:num0/and/:num1', (req, res) => {
  const sum = add(parseInt(req.params.num0, 10), parseInt(req.params.num1, 10));
  if (Number.isInteger(sum)) {
    res.json({ result: sum });
  } else {
    res.status(400);
    res.json({ error: 'Parameters must be valid numbers.' });
  }
});

app.get('/numbers/subtract/:num1/from/:num0', (req, res) => {
  const sum = subtract(parseInt(req.params.num0, 10), parseInt(req.params.num1, 10));
  if (Number.isInteger(sum)) {
    res.json({ result: sum });
  } else {
    res.status(400);
    res.json({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  const product = multiply(a, b);
  if (Number.isInteger(product)) {
    res.status(200).json({ result: product });
  } else if (!('a' in req.body) || !('b' in req.body)) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  const divSolution = divide(a, b);
  if (Number.isInteger(divSolution)) {
    res.status(200).json({ result: divSolution });
  } else if (!('a' in req.body) || !('b' in req.body)) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;
  const newRemainder = remainder(a, b);
  if (Number.isInteger(newRemainder)) {
    res.status(200).json({ result: newRemainder });
  } else if (!('a' in req.body) || !('b' in req.body)) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('numbers/negate', (req, res) => {
  if (req.body.value === true || req.body.value === false) {
    const result = negate(JSON.stringify(req.body.value));
    res.status(200).json(negate({ value: result }));
  } else {
    res.status(400).json({ error: 'missing or incorrect value' });
  }
});

module.exports = app;
