const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const addController = (req, res) => {
  const sum = add(parseInt(req.params.num0, 10), parseInt(req.params.num1, 10));
  if (Number.isInteger(sum)) {
    res.json({ result: sum });
  } else {
    res.status(400);
    res.json({ error: 'Parameters must be valid numbers.' });
  }
};

const subtractController = (req, res) => {
  const sum = subtract(parseInt(req.params.num0, 10), parseInt(req.params.num1, 10));
  if (Number.isInteger(sum)) {
    res.json({ result: sum });
  } else {
    res.status(400);
    res.json({ error: 'Parameters must be valid numbers.' });
  }
};

const multiplyController = (req, res) => {
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
};

const divideController = (req, res) => {
  const { a, b } = req.body;

  if (typeof a === 'undefined' || typeof b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (Number(b) === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  }
  res.status(200).json({ result: divide(Number(a), Number(b)) });
};

const remainderController = (req, res) => {
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
};

module.exports = {
  addController,
  subtractController,
  multiplyController,
  divideController,
  remainderController,
};
