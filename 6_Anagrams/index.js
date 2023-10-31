/* Anagrams are words or phrases that contain the same number of characters. 
Create a function that checks for this. */

function anagrams(string1, string2) {
  let counter1 = 0;
  let counter2 = 0;
  for (let i = 0; i < string1.length; i++) {
    if (!".!@#$%^&*()_+*".includes(string1[i])) {
      counter1++;
    }
  }
  for (let i = 0; i < string2.length; i++) {
    if (!".!@#$%^&*()_+*".includes(string2[i])) {
      counter2++;
    }
  }
  if (counter1 === counter2) {
    return true;
  } else return false;
}
module.exports = { anagrams };
