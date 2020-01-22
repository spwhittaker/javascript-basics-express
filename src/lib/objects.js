const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  } else {
    return false;
  }
};

const isOver65 = person => {
  if (person["age"] > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  let ages = [];
  people.forEach(function (person) {
    ages.push(person["age"])
  });
  return ages;
};

const findByName = (findName, people) => {
  for (let i = 0; i < people.length; i++) {
    if (people[i]["name"] === findName) {
      return people[i];
    }

  }
};

const findHondas = cars => {
  let resultArray = []
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].manufacturer === "Honda") {
      resultArray.push(cars[i]);
    }
  }
  return resultArray;
};

const averageAge = people => {
  let ageArray = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (let i = 0; i < people.length; i++) {
    ageArray.push(people[i]["age"]);
  }
  let totalAges = ageArray.reduce(reducer);
  let averAge = totalAges / ageArray.length;
  return averAge;
};

const createTalkingPerson = function(personName, age) {
  const talkingPerson = {
    "name": personName,
    "age": age,
    "introduce": function (greetedPerson) {
      return `Hi ${greetedPerson}, my name is ${talkingPerson["name"]} and I am ${talkingPerson["age"]}!`;
    }
  }
  return talkingPerson;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};