const assertEqual = require('../assertEqual');
const tail = require('../tail');

//test code

const result = tail(["hello", "lighthouse", "labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "lighthouse");
assertEqual(result[1], "labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const oneWord = tail(["lift"]);
assertEqual(oneWord.length, 0);

const emptyArray = tail([]);
assertEqual(emptyArray.length, 0);