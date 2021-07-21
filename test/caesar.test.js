// Write your tests here!
//basic consts
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;
//const for expected
const caesarExpected1 = "uijolgvm";
const caesarExpected2 = "thinkful";
const caesarExpected3 = "defgc";
const caesarExpected4 = "xyzaw";
//const for actual
const caesarActual1 = caesar("thinkful", 0);
const caesarActual2 = caesar("thinkful", -27);
const caesarActual3 = caesar("thinkful", 32);
const caesarActual4 = caesar("thinkful");
const caesarActual5 = caesar("think-ful", 3);
const caesarActual6 = caesar("think fueling", 3);
const caesarActual7 = caesar("thInKful", 1);
const caesarActual8 = caesar("uijOlgvM", 1, false);
const caesarActual9 = caesar("abcdz", 3);
const caesarActual10 = caesar("abcdz", 3, false);
//test cases
describe("caesar", () => {
  it("should return false if shift is not present, is 0, is less than -25, or more than 25", () => {
    expect(caesarActual1).to.be.false;
    expect(caesarActual2).to.be.false;
    expect(caesarActual3).to.be.false;
    expect(caesarActual4).to.be.false;
  });
});
describe("caesar", () => {
  it("should stay the same length", () => {
    expect(caesarActual5).have.lengthOf(9);
    expect(caesarActual6).have.lengthOf(13);
  });
});
describe("caesar", () => {
  it("should encode or decode with or without capitals", () => {
    expect(caesarActual7).to.be.equal(caesarExpected1);
    expect(caesarActual8).to.be.equal(caesarExpected2);
  });
});
describe("caesar", () => {
  it("should wrap around if the end or beginning of the alphabet is reached", () => {
    expect(caesarActual9).to.be.equal(caesarExpected3);
    expect(caesarActual10).to.be.equal(caesarExpected4);
  });
});
