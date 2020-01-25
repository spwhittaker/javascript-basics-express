const express = require('express');

const router = express.Router();
const {
  addController,
  subtractController,
  multiplyController,
  divideController,
  remainderController,
} = require('../controllers/numbers');

router.get('/add/:num0/and/:num1', addController);

router.get('/subtract/:num1/from/:num0', subtractController);

router.post('/multiply', multiplyController);

router.post('/divide', divideController);

router.post('/remainder', remainderController);
module.exports = router;
