/* Create a square matrix of a given size in which elements are in spiral order. */

function reverse(string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    newString += string[string.length - 1 - i];
  }
  return newString;
}
module.exports = { reverse };
