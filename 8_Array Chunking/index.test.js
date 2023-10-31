const { chunk } = require("./index");

describe("Array Chunking", () => {
  it("Should implement array chunking", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk([1, 2, 3, 4], 5)).toEqual([[1, 2, 3, 4]]);
  });
});