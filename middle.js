const middle = function(array) {
  let value = [];
  if (array.length < 3) {
    return value;
  } else if (array.length % 2 !== 0) {
    let middle = Math.floor(array.length / 2);
    value.push(array[middle]);
  } else if (array.length % 2 === 0) {
    let middle = (array.length / 2);
    value.push(array[middle - 1], array[middle]);
  }
  return value;
};

module.exports = middle;