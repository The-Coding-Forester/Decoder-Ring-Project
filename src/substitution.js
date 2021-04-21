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

  function isSpecialCharacter(character) {
    if (trueAlphabet.indexOf(character) !== -1) {
      // -1 means that the character is not in the array, in this case making it a special character
      return false;
    }
    return true;
  }


  function getIndexArrayFromString(string) {
    //convert string to array
    let indexArray = getArrayFromString(string).map((character) => {
      //create new array with letter values replaced by their corresponding index in the trueAlphabet
      if (isSpecialCharacter) {
        return character;
      }
      return trueAlphabet.indexOf(character);
    });
    return indexArray;
  }

  function encodeString(string, newAlphabetArray) {
    //call getIndexArrayFromString function and use the results to return a array of characters with the corresponding index from the newAlphabetArray
    let encodedArray = getIndexArrayFromString(string).map((indexNum) => {
      if (isSpecialCharacter) {
        return indexNum;
      }
      return newAlphabetArray[indexNum];
    });
    //convert newly created array to a string
    return encodedArray.join("");
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
    if (encode) {
      console.log(encodeString(string, newAlphabetArray));
      return encodeString(string, newAlphabetArray);
    }
    console.log(getIndexArrayFromString(string));
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
