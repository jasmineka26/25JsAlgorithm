const { max } = require("./index");

describe("Max Character", () => {
  it("Should return max character", () => {
    expect(max("Hello World!")).toBe("l");
  });
});
