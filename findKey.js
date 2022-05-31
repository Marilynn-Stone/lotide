const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//loop object
//when callback returns truthy, return key
//if no key found, return undefined

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    } else {
      continue;
    }
  }
  undefined;
};


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

assertEqual(findKey({
  desert: "ice cream",
  drink: "beer",
  main: "Pho",
  appetizer: "bread"
}, x => x === "beer"), "drink");
