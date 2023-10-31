/* Implement a function that returns the fibonacci number at a given index. */

function fibonacci(index) {
  let series = [1, 1];
  for (let i = 0; i < index; i++) {
    series.push(series[i] + series[i + 1]);
  }
  return series[index - 1];
}



module.exports = { fibonacci };
