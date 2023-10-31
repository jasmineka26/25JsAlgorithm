const { reverseWords } = require("./index");

describe("Reverse Words", () => {
  it("Should reverse words", () => {
    expect(reverseWords("I love JavaScript!")).toBe("I evol !tpircSavaJ");
  });
});
