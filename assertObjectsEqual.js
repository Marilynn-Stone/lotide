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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  if (actualKeys.length !== expectedKeys.length) {
    return console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    for (let key of actualKeys) {
      if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
        if (eqArrays(actual[key], expected[key])) {
          return console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
        } else {
          if (actual[key] !== expected[key]) {
            return console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
          }
        }
      }
    }
  }
  return true;
};

assertObjectsEqual({a:1, b:2}, {a:1, b:2});
assertObjectsEqual({a:1, b:2}, {c:3, d:4});