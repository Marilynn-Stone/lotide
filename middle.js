//Test/Assertion Functions
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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

//Actual Function
const middle = function(array) {
  let value = [];
  if (array.length < 3) {
    return value;
  } else if (array.length % 2 !== 0) {
    let middle = Math.floor(array.length / 2);
    value.push(array[middle]);
  } else if (array.length % 2 === 0) {
    let middle = (array.length / 2);
    value.push(array[middle - 1], array[middle]);
  }
  return value;
};

//Test Code
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]*/
console.log(middle([1, 2, 3, 4, 5, 6,])); // => [3, 4]

console.log(eqArrays(middle([1,2,3,4,5,6,7]),[3,4]));

console.log(assertArraysEqual(middle([1,2]),[]));