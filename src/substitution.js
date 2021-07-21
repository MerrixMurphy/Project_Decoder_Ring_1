// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //array for standard alphabet
  const standardAlpha = [
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
  //obj to hold the standardAlpha array vals as individual keys and alphabet as values for each key
  let cipherAlpha = {};

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //array to hold the new word
    let newWord = [];
    //return false if alphabet is not 26 characters or repeats letters
    const checkAlpha = new Set(alphabet);
    if (checkAlpha.size !== 26) return false;
    //input to lowercase
    input = input.toLowerCase();
    //loop through alphabet and return an object with standardAlpha as the keys and alphabet as the values
    for (let s = 0; s < standardAlpha.length; s++) {
      cipherAlpha[standardAlpha[s]] = alphabet[s];
    }
    //create var for each value from cipherAlpha and each letter in the input and loop through each.
    for (let i = 0; i < input.length; i++) {
      let eachInput = input[i];
      //if the input is a space, push the space
      if (eachInput === " ") newWord.push(eachInput);
      for (c in cipherAlpha) {
        let cipher = cipherAlpha[c];
        //check if we are encoding or decoding and run appropriately
        if (!encode) {
          //check if the values from cipherAlpha and the letters of input match and if so push the cipherAlpha keys to newWord
          if (eachInput === cipher) {
            newWord.push(c);
          }
        } else {
          //check if the keys from cipherAlpha and the letters of input match and if so push the cipherAlpha vals to newWord
          if (eachInput === c) {
            newWord.push(cipher);
          }
        }
      }
    }
    //return the newWord array after joining it into a single string
    return newWord.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
