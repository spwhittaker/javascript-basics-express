const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return a ** b;
};

const round = a => {
 return Math.round(a);
};

const roundUp = a => {
  return Math.ceil(a);
};

const roundDown = a => {
  return Math.floor(a);
};

const absolute = a => {
  /* if (a < 0){
    const result = a * -1;
  return result;}
else {return a;}; */

  return a < 0 ? a * -1 : a;
};
const quotient = (a, b) => {
  if ((a / b) >= 0) {
    return Math.floor(a / b);
  } else if ((a / b) < 0) {
    return Math.ceil(a / b);
  };
};

const remainder = (a, b) => {
  return a % b;
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
