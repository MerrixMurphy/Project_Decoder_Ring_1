// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //object to hold array values for the cipher
  const horizontal = {
    1: ["a", "b", "c", "d", "e"],
    2: ["f", "g", "h", "(i/j)", "k"],
    3: ["l", "m", "n", "o", "p"],
    4: ["q", "r", "s", "t", "u"],
    5: ["v", "w", "x", "y", "z"],
  };
  function polybius(input, encode = true) {
    // your solution code here
    //put input to lowercase
    input = input.toLowerCase();
    //array for new string
    const newString = [];
    //array to track for decoding with 2 numbers at a time
    let tempTracker = [];
    //loop through input
    for (i = 0; i < input.length; i++) {
      const letter = input[i];
      //check if it is encoding or decoding
      if (encode) {
        //if encoding, check if the letter being viewed is a space, i, or j and push appropriate character
        if (letter === "i" || letter === "j") {
          newString.push(4);
          newString.push(2);
        } else if (letter === " ") {
          newString.push(letter);
        }
        //loop through each object and create consts for the values and keys
        for (const h in horizontal) {
          const rowKey = h;
          const rowVal = horizontal[h];
          // loop through the values to see if any include the letter then push appropriate numbers
          if (rowVal.includes(letter)) {
            newString.push(rowVal.indexOf(letter) + 1);
            newString.push(rowKey);
          }
        }
      } else {
        //if decoding, check to verify if the length not including spaces is even. if not, return false
        let evenCheck = input.replace(/\s+/g, "");
        if (evenCheck.length % 2) return false;
        //check if the letter is a space, if so push to the array holder for the new word, otherwise push to the tempTracker
        if (letter === " ") {
          newString.push(letter);
        } else {
          tempTracker.push(letter);
        }
        //after a pair of numbers is added to tempTracker, push the associated letter to the main array holder, then clear the temp
        if (tempTracker.length === 2) {
          let valSet = horizontal[tempTracker[1]];
          let specVal = valSet[tempTracker[0] - 1];
          newString.push(specVal);
          tempTracker = [];
        }
      }
    }
    //return the newString array after joining it into a single string
    return newString.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
