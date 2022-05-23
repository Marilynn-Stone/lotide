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
