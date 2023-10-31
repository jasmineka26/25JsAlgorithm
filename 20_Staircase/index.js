/* For a given number of steps, print out a “staircase” using hashes and spaces. */

function steps(input) {
  let step = "";
  for (let i = 1; i <= input; i++) {
    for (let j = 0; j < i; j++) {
      step += "#";
    }
    step += "\n";
  }
  return step;
}
module.exports = { steps };
