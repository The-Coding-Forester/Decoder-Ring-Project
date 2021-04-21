const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  describe("error handling for input values", () => {
    it("should return false if the alphabet value is not present", () => {
      //rather than set expected to false I will use .to.be.false
      const actual = substitution("thinkful");
      expect(actual).to.be.false;
    });
    it("should return false if the alphabet length is not equal to 26", () => {
      const actual = substitution("thinkful", "short");
      expect(actual).to.be.false;
    });
    it("should return false if the input value is not present", () => {
      let message;
      const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const actual = substitution(message, alphabet)
      expect(actual).to.be.false;
    });
    it("should return false if the inputted alphabet has duplicate characters", () => {
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
      expect(actual).to.be.false;
    })
  })
})