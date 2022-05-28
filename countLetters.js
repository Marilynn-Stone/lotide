const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const result = {};
  for (let character of sentence) {
    if (character === " ") {
      continue;
    } else {
      if (result[character]) {
        result[character] += 1;
      } else {
        result[character] = 1;
      }
    }
  }
  return result;
};
countLetters("today is thursday");

assertEqual(countLetters("today is thursday").t,2);