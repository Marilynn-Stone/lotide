//loop through array
//push elements into a new array until the callback returns a truthy value.
//return the new array
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


const takeUntil = function(array, callback) {
  let result = [];
  for (let x of array) {
    if (callback(x)) {
      break;
    } else {
      result.push(x);
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ['pig', 'cat', 'fish', 'dog'];


assertArraysEqual(takeUntil(data3, x => x === 'fish'), ['pig', 'cat']);