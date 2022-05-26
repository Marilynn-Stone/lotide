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

//loop through string
//for each character, return what index it is found at
//ignore white space

const letterPositions = function(sentence) {
  const results = {};
  let spacesRemoved = sentence.split(" ").join("");
  console.log(spacesRemoved);
  return results;
};

letterPositions("lighthouse in the house");
//assertArraysEqual(letterPositions("hello").e, [1]);