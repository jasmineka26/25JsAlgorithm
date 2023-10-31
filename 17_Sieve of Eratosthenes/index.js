/* For a given number, find all the prime numbers from zero to that number. */

function primes(number) {
  let numsArr = [];
  let nonePrimes = [];
  for (let i = 2; i < number; i++) {
    numsArr.push(i);
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        nonePrimes.push(i);
        break;
      }
    }
  }
  return numsArr.filter((item) => !nonePrimes.includes(item));
}

function primes2(number) {
  const result = [2];
  for (let i = 3; i <= number; i++) {
    let isPrime = true;
    const half = Math.floor(i / 2);
    for (const prime of result) {
      if (prime > half) {
        break;
      } else if (i % prime === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) result.push(i);
  }
  console.log(result);
  return result;
}

module.exports = { primes: primes2 };
