const { integerReverse } = require("./index");

describe("Integer Reversal", () => {
  it("Should reverse integer", () => {
    expect(integerReverse(1234)).toBe(4321);
    expect(integerReverse(-1200)).toBe(-21);
  });
});
