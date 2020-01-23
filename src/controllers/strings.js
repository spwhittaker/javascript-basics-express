const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

const hello = (req, res) => {
  res.status(200).send({ result: sayHello(req.params.string) });
};

const upper = (req, res) => {
  res.status(200).send({ result: uppercase(req.params.string) });
};

const lower = (req, res) => {
  res.status(200).send({ result: lowercase(req.params.string) });
};

const stringQuery = (req, res) => {
  if (req.query.length) {
    res.json({
      result: firstCharacters(req.params.string, req.query.length),
    });
  } else {
    res.json({
      result: firstCharacter(req.params.string),
    });
  }
};

module.exports = { hello, upper, lower, stringQuery };
