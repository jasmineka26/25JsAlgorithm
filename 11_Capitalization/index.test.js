const { capitalize } = require("./index");

describe("Capitalization", () => {
  it("Should capitalize phrase", () => {
    expect(capitalize("hello world")).toBe("Hello World");
  });
});
