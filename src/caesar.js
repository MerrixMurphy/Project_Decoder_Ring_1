// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // array of alphabet to cycle through
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  function caesar(input, shift, encode = true) {
    // your solution code here
    // array for the new decoded/encoded string
    const newWord = [];
    // return false if certain conditions are met
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    //check if we are decoding and if so, shift in the opposite direction
    if (!encode) shift = -shift;
    // make sure the input is all lowercase
    input = input.toLowerCase();
    // loop through the input to see if the alphabet includes each letter
    for (let i = 0; i < input.length; i++) {
      const letter = input[i];
      if (alphabet.includes(letter)) {
        //if the letter is included, check the current index, shift it the proper direction, and add it to the new word array.
        let current = alphabet.indexOf(letter);
        let newCurrent = current + shift;
        if (newCurrent > 25) newCurrent -= 26;
        if (newCurrent < 0) newCurrent += 26;
        newWord.push(alphabet[newCurrent]);
      } else {
        // if there is no match like for a space or dash, add that character to the new word array.
        newWord.push(letter);
      }
    }
    // return the new word after joining everything in the new word array.
    return newWord.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
