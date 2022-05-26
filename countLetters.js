
const countLetters = function(sentence) {
  const result = {};
  let spacesRemoved = sentence.split(" ").join("");
  for (let character of spacesRemoved) {
    if (character !== "");
    if (result[character]) {
      result[character] += 1;
    } else {
      result[character] = 1;
    }
  }
  console.log("results",result);
  return result;
};

countLetters("today is thursday");