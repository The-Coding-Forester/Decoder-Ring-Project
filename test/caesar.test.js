const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {

  //suite of tests to determine if the shift value is valid
  it("should return false if shift value is not present", () => {
    const expected = false;
    const actual = caesar("thinkful");
    expect(actual).to.equal(expected);
  });

  it("should return false if shift value is equal to 0)", () => {
    const expected = false;
    const actual = caesar("thinkful", 0);
    expect(actual).to.equal(expected);
  });

  it("should return false if shift value is less than -25", () => {
    const expected = false;
    const actual = caesar("thinkful", -26);
    expect(actual).to.equal(expected);
  });

  it("should return false if shift value is greater then 25", () => {
    const expected = false;
    const actual = caesar("thinkful", 99);
    expect(actual).to.equal(expected);
  });
  //suite of tests for valid shift value has ended

  it("should convert inputted string to lower case", () => {
    const expected = "a message";
    const actual = "A Message";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and other non-alphabetic symbols in the message after encoding", () => {
    const expected = 'bpqa qa i amkzmb umaaiom!';
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and other non-alphabetic symbols in the message after decodeing", () => {
    const expected = 'this is a secret message!'
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });
});