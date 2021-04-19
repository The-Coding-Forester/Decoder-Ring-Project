/* Please refrain from tampering with the setup code provided here,
   as the index.html and test files rely on this setup to work properly.
   Only add code (e.g., helper methods, variables, etc.) within the scope
   of the anonymous function on line 6 */

const caesarModule = (function () {
  // you can add any code you want within this function scope
  //function needs to know alphabet, use array for indexing
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //user inputted message needs to be turned into array for index shifting
  function getArrayFromString(string) {
    return Array.from(string);
  }

  function shiftLetter(resultingIndex, shift) {
    let newIndex = (resultingIndex + shift) % 26; //should accept results of 0 and negatives then add to 26 for new index number
    if (newIndex < 0) {
      newIndex = newIndex + 26
    }
    return alphabet[newIndex];
  }

  function createShiftedArray(string, shift) {
    let shiftedArray = getArrayFromString(string).map((character) => {
      //if index of array is equal to a letter, then shift that letter and push to new array. Else, return original index.
      //spaces in user message need to remain equal to " " and not be subject to shift
      if (alphabet.indexOf(character) === -1) {
        return character
      }
      return shiftLetter(alphabet.indexOf(character), shift);
    });
    return shiftedArray;
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0 || shift > 25 || shift < -25) {
      // alphabet is 26 characters (0 through 25), you cannot shift beyond that in either direction
      return false;
    }

    const string = input.toLowerCase();
    let updatedShift = shift;

    if (encode === false) {
      updatedShift = shift * -1;
    }

    //user inputted message needs to be returned to a string
    return createShiftedArray(string, updatedShift).join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
