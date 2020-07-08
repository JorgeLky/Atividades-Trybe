const { string } = require("yargs");

const randomNumber = () => Math.round(Math.random() * 100);

const upperWord = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const words = (string, string2) => string + string2;

module.exports = { randomNumber, upperWord, firstLetter, words }