// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare = {
    1: { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" },
    2: { 1: "f", 2: "g", 3: "h", 4: "(i/j)", 5: "k" },
    3: { 1: "l", 2: "m", 3: "n", 4: "o", 5: "p" },
    4: { 1: "q", 2: "r", 3: "s", 4: "t", 5: "u" },
    5: { 1: "v", 2: "w", 3: "x", 4: "y", 5: "z" },
  }

  const column = Object.keys(polybiusSquare);
  let rowKey;

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  function getRowKey(object, value) {
    rowKey = getKeyByValue(object, value);
    return rowKey
  }

  function getArrayFromString(string) {
    return Array.from(string);
  }

  function encodeInput(input) {
    //take input and make it lower case and make it into an array
    const startingArray = getArrayFromString(input.toLowerCase());
    const encodedArray = [];
    //iterate through the startingArray
    startingArray.forEach(character => {
      if (character === " ") {
        encodedArray.push(" ");
      }
      else if (character === "i" || character === "j") {
        encodedArray.push("42")
      }
      else {
        column.forEach((key) => {
          if (getRowKey(polybiusSquare[key], character)) {
            encodedArray.push(rowKey + key)
          }
        })
      }
      return encodedArray;
    });
    return encodedArray.join("");
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
        let columnNum = index;
        let rowNum = startingArray[i + 1];
        i = i + 1
        decodedArray.push(polybiusSquare[rowNum][columnNum])
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
