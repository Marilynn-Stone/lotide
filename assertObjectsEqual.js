const eqArrays = require('./eqArrays');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  if (actualKeys.length !== expectedKeys.length) {
    return console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  for (let key of actualKeys) {
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
      if (eqArrays(actual[key], expected[key])) {
        return console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
      }
      if (actual[key] !== expected[key]) {
        return console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
    }
  }
  return console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

assertObjectsEqual({a:1, b:2}, {a:1, b:2});
assertObjectsEqual({a:1, b:2}, {c:3, d:4, e:4});