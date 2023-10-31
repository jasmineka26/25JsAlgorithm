const { maxProfit } = require("./index");

describe("Max Profit", () => {
  it("Should return minimum buy price and maximum sell price", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual([1, 5]);
    expect(maxProfit([2, 1, 5, 3, 4])).toEqual([1, 5]);
    expect(maxProfit([2, 10, 1, 3])).toEqual([2, 10]);
    expect(maxProfit([2, 1, 2, 11])).toEqual([1, 11]);
  });
});
