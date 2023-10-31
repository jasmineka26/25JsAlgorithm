/* 
Given a string of characters, return the character that appears the most often.
*/

function max(string = "") {
  let counter = 0;
  let maxCount = 0;
  let maxStr = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        counter++;
      }
    }
    if (maxCount < counter) {
      maxCount = counter;
      maxStr = string[i];
    }
    counter = 0;
  }
  return maxStr;
}

module.exports = { max };
