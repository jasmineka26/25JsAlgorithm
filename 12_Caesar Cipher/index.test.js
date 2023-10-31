const { caesarCipher } = require("./index");

describe("Caesar Cipher", () => {
  it("Should shift to the right", () => {
    expect(caesarCipher("I love JavaScript!", 100)).toBe("E hkra FwrwOynelp");
  });

  it("Should shift to the left", () => {
    expect(caesarCipher("I love JavaScript!", -100)).toBe("M pszi NezeWgvmtx");
  });
});
