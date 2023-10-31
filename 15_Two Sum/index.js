/* Given an array of numbers, return all pairs that add up to a given sum. 
The numbers can be used more than once. */

function twoSum(array, sum) {
  let twoSum = [];
  let finalArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        twoSum.push(array[j], array[i]);
        finalArr.push(twoSum);
        twoSum = [];
      }
    }
  }
  return finalArr;
}
module.exports = { twoSum };
