/* Please refrain from tampering with the setup code provided here,
   as the index.html and test files rely on this setup to work properly.
   Only add code (e.g., helper methods, variables, etc.) within the scope
   of the anonymous function on line 6 */

const caesarModule = (function () {
  // you can add any code you want within this function scope
  //function needs to know alphabet, use array for indexing
  const alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
  //user inputted message needs to be turned into array for index shifting
  //spaces in user message need to remain equal to " " and not be subject to shift
  //
  //user inputted message needs to be returned to a string


  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0) return false;
    if (shift > 25) return false; // alphabet is 26 (25 because of 0 index) characters, you cannot shift beyond that in either direction
    if (shift < -25) return false;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
