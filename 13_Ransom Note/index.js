/* Given a magazine of words and a ransom note, 
determine if it’s possible to “cut out” and create the ransom note from the magazine words. */

function ransomNote(note, text = "") {
  let result = comparison(note, text);
  console.log(result);
  if (result.length === 0) {
    console.log(result.length);
    return true;
  } else return false;
}

function comparison(note, text) {
  const textArr = text.split(" ");
  const noteArr = note.split(" ");
  for (let i = 0; i < noteArr.length + 1; i++) {
    for (let j = 0; j < textArr.length + 1; j++) {
      if (noteArr[i] === textArr[j]) {
        noteArr.splice(noteArr[i], 1);
        textArr.splice(textArr[j], 1);
      }
    }
  }
  return noteArr;
}

module.exports = { ransomNote };
