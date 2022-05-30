// create a function to take in 2 arguments
//1. an array to map
//2. a callback function
//return new array based on result of callback
const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    return console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
    }
  }
  return console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
};

const words = ["ground", "control", "to", "major", "tom"];
const towns = ["Mossleigh","Vulcan", "Okotoks", "Edmonton"];
const numbers = [12, 5, 10, 7];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const results3 = map(numbers, number => number * 2);

const results2 = map(towns, function(town) {
  if (town.length > 7) {
    return town;
  }
});

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['Mossleigh', 'Edmonton']);
assertArraysEqual(results3, [24, 10, 20, 14]);