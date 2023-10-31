const { vowels } = require(".");

describe("Vowels", () => {
  it("Should count vowels", () => {
    expect(vowels("hello world")).toBe(3);
  });
});
