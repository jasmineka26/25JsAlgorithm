function caesarCipher(input = "", shift) {
  let text = input.split(" ");
  const sizeShift = calcShift(shift);
  let asciiChar = 0;
  let newAscii = 0;
  let arrayWord = [];
  let string = "";
  let finalPhrase = "";
  for (let i = 0; i < text.length; i++) {
    const element = text[i];
    for (let j = 0; j < element.length; j++) {
      asciiChar = getAsciiCode(element[j]);
      if (asciiChar >= 65 && asciiChar < 90) {
        newAscii = asciiChar + sizeShift;
        if (newAscii > 90) {
          newAscii = 64 + newAscii - 90;
        }
        string += String.fromCharCode(newAscii);
      }
      if (asciiChar >= 97 && asciiChar < 122) {
        newAscii = asciiChar + sizeShift;
        if (newAscii > 122) {
          newAscii = 96 + newAscii - 122;
        }
        string += String.fromCharCode(newAscii);
      }
    }
    arrayWord.push(string);
    string = "";
  }

  finalPhrase = arrayWord.join(" ");
  return finalPhrase;
}

module.exports = { caesarCipher };

function getAsciiCode(char = "") {
  return char.charCodeAt();
}

function calcShift(size) {
  if (size > 26) return size % 26;
  if (size < 0) return (shift = 26 + (size % 26));
  return size;
}
