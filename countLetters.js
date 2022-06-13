const assertEqual = require('./assertEqual');

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

assertEqual(countLetters("today is thursday").t, 2);