const negate = a => {
  /*   const result = !a;
      return result; */
  return !a;
};

const both = (a, b) => {
  if (a && b == true) {
    return true;
  }
  return false;
};

const either = (a, b) => {
  if (a || b == true) {
    return true;
  }
  return false;
};

const none = (a, b) => {
  if (a == false && b == false) {
    return true;
  }
  return false;
};

const one = (a, b) => {
  if ((a == true && b == false) || (a == false && b == true)) {
    return true;
  }
  return false;
};

const truthiness = a => {
  if (a) {
    return true;
  }
  return false;
};

const isEqual = (a, b) => {
  if (a == b) {
    return true;
  }
  return false;
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }
  return false;
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }
  return false;
};

const isOdd = a => {
  if (a % 2 === 1) {
    return true;
  }
  return false;
};

const isEven = a => {
  if (a % 2 === 0) {
    return true;
  }
  return false;
};

const isSquare = a => {
  if (Number.isInteger(Math.sqrt(a))) {
    return true;
  }
  return false;
};

const startsWith = (char, string) => {
  if (string[0] === char) {
    return true;
  }
  return false;
};

const containsVowels = string => {
  const lowerString = string.toLowerCase();
  console.log(lowerString);
  let vowelCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      lowerString[i] == "a" ||
      lowerString[i] == "e" ||
      lowerString[i] == "i" ||
      lowerString[i] == "o" ||
      lowerString[i] == "u"
    ) {
      vowelCount++;
    }
  }
  console.log(vowelCount);
  if (vowelCount > 0) {
    return true;
  }
  return false;
};

const isLowerCase = string => {
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
