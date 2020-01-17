const express = require('express');

const app = express();
const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./strings');

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

module.exports = app;
