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
  //spaces in user message need to remain equal to " " and not be subject to shift
  function createShiftedArray(string, shift) {
    const shiftedArray = [];
    //if index of array is equal to a letter, then shift that letter and push to new array. Else, return original index.
    string.forEach((character) => {
      if (alphabet.find((letter) => letter !== character)) {
        shiftedArray.push(character);
      } else {
        alphabet.find((letter) => letter === character){
          let newIndex;
          if ((alphabet.indexOf + shift) <= 0) {   //should accept results of 0 and negatives then add to 26 for new index number
            newIndex = (alphabet.indexOf + shift) + 26;
          } else {
            newIndex = (alphabet.indexOf + shift) % 26;
          }
          shiftedArray.push(alphabet[newIndex]);
        }
      }
    })
  }
  //user inputted message needs to be returned to a string


  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0) return false;
    if (shift > 25) return false; // alphabet is 26 (25 because of 0 index) characters, you cannot shift beyond that in either direction
    if (shift < -25) return false;
    const string = input.toLowerCase;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
