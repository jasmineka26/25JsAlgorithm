const { fibonacci } = require("./index");

describe("Fibonacci", () => {
  it("Should implement fibonacci", () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(10)).toBe(55);
  });
});
