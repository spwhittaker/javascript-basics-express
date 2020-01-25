const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

const getNthElementController = (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.ind, req.body.array) });
};

const arrayToStringController = (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
};

const appendController = (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
};

const startsWithVowelController = (req, res) => {
  res.status(200).json({
    result: elementsStartingWithAVowel(req.body.array),
  });
};

const removeNthElementController = (req, res) => {
  res.status(200).json({ result: removeNthElement2(req.query.index, req.body.array) });
};
module.exports = {
  getNthElementController,
  arrayToStringController,
  appendController,
  startsWithVowelController,
  removeNthElementController,
};
