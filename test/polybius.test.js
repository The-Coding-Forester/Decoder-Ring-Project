const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  describe("Encoding a message", () => {
    it("should return a string with each letter converted into the polybius square specified number", () => {
      const expected = "44513444";
      const actual = polybius("test");
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters when encoding", () => {
      const expected = "23513434112251";
      const actual = polybius("Message");
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces throughout string after encoding", () => {
      const expected = "3251131343 2543241341";
      const actual = polybius("Hello world");
      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const actual = polybius("jinx");
      const expected = "42423335";
      expect(actual).to.equal(expected);
    });
  });

  describe("Decoding a message", () => {
    it("should return false if the number of characters in the string, excluding spaces, is not even", () => {
      const actual = polybius("44324233521254134", false);
      expect(actual).to.be.false;
    });

    it("should return a string with each number pair converted into the polybius square specified letter", () => {
      const expected = "test";
      const actual = polybius("44513444", false);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces throughout string after decoding", () => {
      const expected = "hello world";
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.equal(expected);
    });
    it("should translate 42 to i and j", () => {
      const expected = "th(i/j)nkful";
      const actual = polybius("4432423352125413", false);
      expect(actual).to.equal(expected)
    })
  });
})