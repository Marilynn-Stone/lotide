const assertArraysEqual = function (array1, array2) {
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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function (array) {
  let flatArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let instance of element) flatArray.push(instance);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([2, 5, [7, 4, 5], [8, 9]]), [2, 5, 7, 4, 5, 8, 9]);
assertArraysEqual(flatten([2, 5, ["cat", "dog"], [8, 9]]), [
  2,
  5,
  "cat",
  "dog",
  8,
  9,
]);
