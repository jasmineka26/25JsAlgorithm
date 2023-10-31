const { reverse } = require("./index");

describe("String Reversal", () => {
  it("Should reverse string", () => {
    const reversed = reverse("Hello World!");
    expect(reversed).toBe("!dlroW olleH");
  });
});