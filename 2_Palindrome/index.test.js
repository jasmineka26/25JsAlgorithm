const { isPalindrome } = require("./index");

describe("Palindrome", () => {
  it("Should return true", () => {
    expect(isPalindrome("cigar Toss it in a can. It is so tragic")).toBe(true);
  });
  it("Should return false", () => {
    expect(isPalindrome("sit ad est love")).toBe(false);
  });
});
