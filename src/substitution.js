// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const trueAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function checkForDuplicateCharacters(newAlphabetArray) {
    newAlphabetArray.forEach(character => {
      let filterLength = newAlphabetArray.filter((index) => character === index);
      if (!filterLength > 1) {
        return false
      }
    });
  }

  function getArrayFromString(string) {
    return Array.from(string);
  }

  function substitution(input, alphabet, encode = true) {
    // test to make sure alphabet length is 26 or missing
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    if (!input) {
      return false;
    }
    const string = input.toLowerCase();
    const newAlphabet = alphabet.toLowerCase();
    const newAlphabetArray = getArrayFromString(newAlphabet)
    if (!checkForDuplicateCharacters(newAlphabetArray)) {
      return false;
    }

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
