// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //refactoring polybiusSquare from and object of objects to an object with letters as keys and numbers as values
  const polybiusSquare = {
    "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
    "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
    "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
    "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
    "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
  };

  //creating reverse of polybiusSquare to reduce coding complexity
  const reversePolybiusSquare = {}

  for (let letter in polybiusSquare) {
    //numberPair created to prevent confusion within for in loop, specifically in the if statement
    const numberPair = polybiusSquare[letter];

    if (reversePolybiusSquare[numberPair]) {
      reversePolybiusSquare[numberPair] = `(${reversePolybiusSquare[numberPair]}/${letter})`
    } else {
      reversePolybiusSquare[numberPair] = letter;
    }

  }

  function getArrayFromString(string) {
    return Array.from(string);
  }

  function encodeInput(input) {
    //take input and make it lower case and make it into an array
    const startingArray = getArrayFromString(input.toLowerCase());
    //iterate through the startingArray
    //return an array with with letter characters replaced by number values and spaces conserved
    return startingArray.map(character => {
      if (character === " ") {
        return character;
      } else {
        return polybiusSquare[character];
      }
      //convert array into a string
    }).join("");
  }

  function decodeInput(input) {
    const startingArray = getArrayFromString(input);
    const decodedArray = [];
    for (let i = 0; i < startingArray.length; i++) {
      const index = startingArray[i];
      if (index === " ") {
        decodedArray.push(index);
      }
      else {
        let tens = index;
        let ones = startingArray[i + 1];
        const numberKey = tens + ones;
        i = i + 1;
        decodedArray.push(reversePolybiusSquare[numberKey]);
      }
    }
    return decodedArray.join("");
  }



  function polybius(input, encode = true) {
    // your solution code here
    if (encode === false) {
      if (input.replace(" ", "").length % 2 > 0) {
        return false;
      } else {
        return decodeInput(input);
      }
    }

    if (encode) {
      return encodeInput(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
