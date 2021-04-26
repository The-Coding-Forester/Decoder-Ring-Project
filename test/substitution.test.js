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
  describe("encoding a message", () => {
    it("should encode a message using the substitute alphabet", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });
    it("should convert inputted string to lower case", () => {
      const actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });
    it("should work with any kind of unique characters in the substitute alphabet", () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      const expected = "y&ii$r&";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in message", () => {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    });
  })
  describe("decoding a message", () => {
    it("should decode a message using the substitute alphabet", () => {
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });
    it("should convert inputted string to lower case", () => {
      const actual = substitution("jRUfscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });
    it("should work with any kind of unique characters in the substitute alphabet", () => {
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
      const expected = "message";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in message", () => {
      const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "you are an excellent spy";
      expect(actual).to.equal(expected);
    });
  });
});