const { reverseArray } = require("./index");

describe("Reverse Arrays", () => {
  it("Should reverse arrays", () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});

