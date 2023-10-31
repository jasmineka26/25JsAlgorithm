const { anagrams } = require("./index");

describe("Anagrams", () => {
  it("Should implement anagrams", () => {
    expect(anagrams("hello world", "world hello")).toBe(true);
    expect(anagrams("hellow world", "hello there")).toBe(false);
    expect(anagrams("hellow world", "hello there^")).toBe(false);
  });
});
