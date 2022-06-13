const flatten = function(array) {
  let flatArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let instance of element) flatArray.push(instance);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

module.exports = flatten;