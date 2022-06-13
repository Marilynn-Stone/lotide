const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    if (!source.includes(itemsToRemove[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

assertArraysEqual(without([1, 2, 3], [4, 5, 6]), [1, 2, 3]);
assertArraysEqual(without(["the", "quick", "fox"], ["the", "quick", "dog"]), ["fox"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);