/* 
    A palindrome is a word or phrase that reads the same backward as forward. 
    Write a function that checks for this.
*/

const { reverse } = require("../1_string_reversal");

function deleteSpace(phrase) {
  let newString = "";
  for (let i = 0; i <= phrase.length - 1; i++) {
    if (phrase[i] !== "." && phrase[i] !== " ") {
      newString += phrase[i];
    }
  }
  return newString;
}

function isPalindrome(word) {
  let oldString = deleteSpace(word);
  let newString = reverse(oldString);
  console.log(oldString);
  console.log(newString);
  if (oldString === newString) {
    return true;
  } else return false;
}

module.exports = { isPalindrome };
