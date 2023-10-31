const { memoizedFibonacci } = require("./index");

describe("Memoized Fibonacci", () => {
  it("Should implement memoized fibonacci", () => {
    expect(memoizedFibonacci(6)).toBe(8);
    expect(memoizedFibonacci(10)).toBe(55);
  });
});

