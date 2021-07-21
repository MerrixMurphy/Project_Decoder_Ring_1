// Write your tests here!
//basic consts
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;
//const for expected
const polybiusExpected1 = "4432423352125413";
const polybiusExpected2 = "th(i/j)nk ful";
const polybiusExpected3 = "4432423352 125413";
//const for actual
const polybiusActual1 = polybius("thinkful");
const polybiusActual2 = polybius("4432423352 125413", false);
const polybiusActual3 = polybius("thInk fUl");
const polybiusActual4 = polybius("4432423352 12541", false);
//test cases
describe("polybius", () => {
  it("should output the correct string regardless of spaces or capitals", () => {
    expect(polybiusActual3).to.equal(polybiusExpected3);
  });
});
describe("polybius", () => {
  it("should output a string if encoding", () => {
    expect(polybiusActual1).to.equal(polybiusExpected1);
  });
});
describe("polybius", () => {
  it("should output an even string not including spaces when decoding", () => {
    expect(polybiusActual2).to.equal(polybiusExpected2);
  });
});
describe("polybius", () => {
  it("should output false if the output would be odd when decoding", () => {
    expect(polybiusActual4).to.be.false;
  });
});
