const { primes } = require("./index");

describe("Sieve of Eratosthenes", () => {
  it("Should return all prime numbers", () => {
    expect(primes(10)).toEqual([2, 3, 5, 7]);
  });
});
