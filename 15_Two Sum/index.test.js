const { twoSum } = require("./index");

describe("Two Sum", () => {
  it("Should implement two sum", () => {
    expect(twoSum([1, 2, 2, 3, 4], 4)).toEqual([
      [3, 1],
      [2, 2],
    ]);
  });
});
