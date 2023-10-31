const { steps } = require("./index");

describe("Steps", () => {
  it("Should print steps", () => {
    const expectedOutput = "#\n##\n###\n";
    expect(steps(3)).toBe(expectedOutput);
  });
});
