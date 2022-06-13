const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it('returns [1, 2, 3, 4] for [1, [2, 3], 4]', () => {
    assert.deepEqual(flatten([1, [2, 3], 4], [1, 2, 3, 4]));
  });
  it('returns [2, 5, 7, 4, 5, 8, 9] for [2, 5, [7, 4, 5], [8, 9]', () => {
    assert.deepEqual(flatten([2, 5, [7, 4, 5], [8, 9]], [2, 5, 7, 4, 5, 8, 9]));
  });
  it('returns [2, 5, "cat", "dog", 8, 9] for [2, 5, ["cat", "dog"], [8, 9]]', () => {
    assert.deepEqual(flatten([2, 5, ["cat", "dog"], [8, 9]], [2, 5, "cat", "dog", 8, 9]));
  });
});