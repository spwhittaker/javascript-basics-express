const getNthElement = (index, array) => {
  const shortIndex = index % array.length;
 console.log(shortIndex);
   return array[shortIndex];
 console.log(array[shortIndex]);
 };

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  const array2 = array.push(element);
  
};

const addToArray2 = (element, array) => {
 const array2 = array.concat(element);
return array2;
};

const removeNthElement = (index, array) => {
 let newArray = array.splice(index, 1);
  return newArray;
};

const numbersToStrings = numbers => {
  const newArray = numbers.map(element => element.toString());
  return newArray;
};

const uppercaseWordsInArray = strings => {
  const newArray = strings.map(element => element.toUpperCase());
  return newArray;
};

const reverseWordsInArray = strings => {
  const newArray = strings.map(element => {
    let reverseElement="";
    for (let i = element.length-1; i > -1; i--)
    {reverseElement += element[i];}
return reverseElement;
});
return newArray;};

const onlyEven = numbers => {
  const evenNumbers = numbers.filter(element => {
  if (element % 2 === 0)
  return element;
  });
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
 const array2 = [...array];
 array2.splice(index, 1);
 return array2;};

const elementsStartingWithAVowel = strings => {
  return strings.filter(e => ['a', 'e', 'i', 'o', 'u'].indexOf(e[0].toLowerCase()) !== -1);};

const removeSpaces = string => {
  return string.replace(/\s/g, "");};

const sumNumbers = numbers => {
  return numbers.reduce((a, b) => a + b);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
