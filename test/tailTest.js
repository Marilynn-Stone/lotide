const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const array = ["hello", "lighthouse", "labs"];
  const result = tail(array);
  const oneWord = tail(["lift"]);
  const emptyArray = tail([]);
  it('returns new array length of 2 for ["hello", "lighthouse", "labs"]', () => {
    assert.deepEqual(result.length, 2);
  });
  it('returns index 0 as "lighthouse" for ["hello", "lighthouse", "labs"]', () => {
    assert.deepEqual(result[0], "lighthouse");
  });
  it('returns original array length of 3 for ["hello", "lighthouse", "labs"]', () => {
    assert.deepEqual(array.length, 3);
  });
  it('returns new array length of 0 for ["lift"]', () => {
    assert.deepEqual(oneWord.length, 0);
  });
  it('returns new array length of 0 for []', () => {
    assert.deepEqual(emptyArray.length, 0);
  });
});