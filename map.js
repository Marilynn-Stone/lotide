const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const towns = ["Mossleigh","Vulcan", "Okotoks", "Edmonton"];
const numbers = [12, 5, 10, 7];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(towns, town => town.length > 7), ['Mossleigh', 'Edmonton']);
assertArraysEqual(map(numbers, number => number * 2), [24, 10, 20, 14]);