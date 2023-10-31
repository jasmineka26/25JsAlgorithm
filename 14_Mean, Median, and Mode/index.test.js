const { Stats } = require("./index");

const stat1 = [1, 2, 3, 4, 4, 5, 5];
const stat2 = [1, 1, 2, 2, 3, 3, 4, 4];

describe("Mean", () => {
  it("Should implement mean", () => {
    expect(Stats.round(Stats.mean(stat1))).toBeCloseTo(3.43);
    expect(Stats.round(Stats.mean(stat2))).toBeCloseTo(2.5);
  });
});

describe("Median", () => {
  it("Should implement median", () => {
    expect(Stats.median(stat1)).toBe(4);
    expect(Stats.median(stat2)).toBeCloseTo(2.5);
  });
});

describe("Mode", () => {
  it("Should implement mode", () => {
    expect(Stats.mode(stat1)).toEqual([4, 5]);
    expect(Stats.mode(stat2)).toEqual([]);
  });
});
