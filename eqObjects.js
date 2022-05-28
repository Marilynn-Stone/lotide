const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  let result;
  if (object1Keys.length !== object2Keys.length) {
    result = false;
  } else {
    for (let key of object1Keys) {
      if (object1[key] !== object2[key]) {
        result = false;
      } else {
        result = true;
      }
    }
  }
  return result;
};

/*const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};

assertEqual(eqObjects(ab,ba), true);

const abc = { a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);
*/
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);