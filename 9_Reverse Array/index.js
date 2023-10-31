/* Given an array of items, reverse the order. */

function reverseArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[array.length - 1 - i]);
  }
  return newArray;
}
module.exports = { reverseArray };
