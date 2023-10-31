/* Given a phrase, capitalize every word. */

function capitalize(string = "") {
  let phrase = string.split(" ");
  let newWords = "";
  let newphrese = [];
  for (let i = 0; i < phrase.length; i++) {
    let word = phrase[i];
    newWords = word[0].toUpperCase() + word.substring(1);
    newphrese.push(newWords);
  }
  return newphrese.join(" ");
}
module.exports = { capitalize };
