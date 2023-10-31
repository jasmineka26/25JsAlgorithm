/* Given a phrase, reverse the order of the characters of each word. */
const { reverse } = require("../1_string_reversal");

function reverseWords(string) {
  let input = split(string);
  let reversedphrese = [];
  for (let i = 0; i < input.length; i++) {
    const reversed = reverse(input[i]);
    reversedphrese.push(reversed);
  }
  let result = reversedphrese.join(" ");
  return result;
}
module.exports = { reverseWords, split };

function split(string) {
  let arrWord = [];
  let word = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      word += string[i];
    } else if (string[i] === " ") {
      arrWord.push(word);
      word = "";
    }
  }
  if (word !== "") {
    arrWord.push(word);
  }
  return arrWord;
}
