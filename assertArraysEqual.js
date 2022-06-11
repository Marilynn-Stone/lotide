const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays) {
    return console.log(`🟢 Assertion Passed: ${array1} === ${array2}`);
  } else {
    return console.log(`🔴 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;





















module.exports = assertArraysEqual;

/*const eqArrays = function(array1, array2) {
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};*/