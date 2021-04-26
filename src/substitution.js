// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const trueAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //test to see if any value in the newAlphabetArray appears more than once
  function hasDuplicateValues(newAlphabetArray) {
    return newAlphabetArray.some((character) => {
      return newAlphabetArray.filter((index) => character === index).length > 1;
    });
  }

  function getArrayFromString(string) {
    return Array.from(string);
  }

  //encode message by finding which letter in the trueAlphabet matches the inputArray character and using the index of the trueAlphabet character when returning a character from the substitute alphabet
  function encodeMessage(inputArray, newAlphabetArray) {
    return inputArray.map((character) => {
      if (character === " ") {
        return character;
      } else {
        let desiredLetter = trueAlphabet.find((letter) => letter === character);
        return newAlphabetArray[trueAlphabet.indexOf(desiredLetter)];
      }
    }).join("")
  }

  //decode message by finding which character in the substitute alphabet matches the inputArray character and using the index of the substitute character when returning a letter from the trueAlphabet
  function decodeMessage(inputArray, newAlphabetArray) {
    return inputArray.map((character) => {
      if (character === " ") {
        return character;
      } else {
        let desiredCharacter = newAlphabetArray.find((indexCharacter) => indexCharacter === character);
        return trueAlphabet[newAlphabetArray.indexOf(desiredCharacter)];
      }
    }).join("")
  }

  function substitution(input, alphabet, encode = true) {
    // test to make sure alphabet length is 26 or missing
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    if (!input) {
      return false;
    }

    const inputArray = getArrayFromString(input.toLowerCase());
    const newAlphabetArray = getArrayFromString(alphabet.toLowerCase());

    if (hasDuplicateValues(newAlphabetArray)) {
      return false;
    }
    if (encode) {
      return encodeMessage(inputArray, newAlphabetArray);
    }
    if (!encode) {
      return decodeMessage(inputArray, newAlphabetArray);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
