const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
}

const result = tail(["hello", "lighthouse", "labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], )