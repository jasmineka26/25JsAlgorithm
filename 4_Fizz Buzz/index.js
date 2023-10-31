/* Given a number as an input, print out every integer from 1 to that number. However, 
when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, 
print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”. */

function fizzBuzz(input) {
  const array = [];
  for (let i = 1; i <= input; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      array.push("Fizz Buzz");
    } else if (i % 2 === 0) {
      array.push("Fizz");
    } else if (i % 3 === 0) {
      array.push("Buzz");
    } else array.push(i);
  }
  return array;
}
module.exports = { fizzBuzz };
