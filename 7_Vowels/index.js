/* Given a string of words or phrases, count the number of vowels. */

function vowels(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if ("aeuoi".includes(string[i])) {
      counter++;
    }
  }
  return counter;
}
module.exports = { vowels };
