// Write your tests here!
//basic consts
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;
//const for sub alphabet
const subAlpha1 = "xoyqmcgrukswaflnthdjpzibev";
const subAlpha2 = "xoyqmcgrukswaflnthdjpz";
const subAlpha3 = "xoyqmcgrukswaflnthdjpzibev$%";
const subAlpha4 = "xoyqmcgrukswaflnthgjpzibev";
//const for expected
const substitutionExpected1 = "jrufscpw";
const substitutionExpected2 = "jrufs cpw";
const substitutionExpected3 = "thinkful";
const substitutionExpected4 = "think ful";
//const for actual
const substitutionActual1 = substitution("thInkfUl", subAlpha1);
const substitutionActual2 = substitution("doesntmatter", subAlpha2);
const substitutionActual3 = substitution("doesntmatter", subAlpha3);
const substitutionActual4 = substitution("doesntmatter", subAlpha4);
const substitutionActual5 = substitution("think ful", subAlpha1);
const substitutionActual6 = substitution("jrUfscPw", subAlpha1, false);
const substitutionActual7 = substitution("jrufs cpw", subAlpha1, false);
//test cases
describe("substitution", () => {
  it("should return false if subAlpha is not 26 characters exactly or if there are any repeating characters in subAlpha", () => {
    expect(substitutionActual2).to.be.false;
    expect(substitutionActual3).to.be.false;
    expect(substitutionActual4).to.be.false;
  });
});
describe("substitution", () => {
  it("should return the correct decoded message", () => {
    expect(substitutionActual6).to.equal(substitutionExpected3);
  });
});
describe("substitution", () => {
  it("should return correct message regardless of capitalization or spaces", () => {
    expect(substitutionActual7).to.equal(substitutionExpected4);
  });
});
describe("substitution", () => {
  it("should return the correct encoded message", () => {
    expect(substitutionActual1).to.equal(substitutionExpected1);
  });
});
describe("substitution", () => {
  it("should return correct encoded message regardless of capitalization or spaces", () => {
    expect(substitutionActual5).to.equal(substitutionExpected2);
  });
});
