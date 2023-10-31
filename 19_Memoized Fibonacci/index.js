/* Implement a performant recursive function for the fibonacci series. */

function memoizedFibonacci(index) {
  if (index <= 1) {
    return index;
  }
  return memoizedFibonacci(index - 1) + memoizedFibonacci(index - 2);
}
module.exports = { memoizedFibonacci };
