function reverseNum(number) {
  let newNum = "";
  if (number[0] !== "-") {
    for (let i = 0; i < number.length; i++) {
      newNum = number[i] + newNum;
    }
  } else if (number[0] === "-") {
    const sign = "-";
    for (let i = 1; i < number.length; i++) {
      newNum = number[i] + newNum;
    }
    newNum = sign + newNum;
  }
  return newNum;
}

function integerReverse(num) {
  let number = reverseNum(num);
  let newNum = number / 10;
  let str = newNum.toString();
  let newStr = str.replace(".", "");
  let finalNum = Number(newStr);
  return finalNum;
}

module.exports = { integerReverse };
