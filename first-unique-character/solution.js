//PROBLEM
//Write a program that identifies the first unique character in a string.

//PHASE ONE: QUESTIONS & PSEUDOCODE
//Is this a string?
//Do I only include characters in the alphabet? Could a space be a character?

//PHASE TWO: CODE

function findFirstUniqueCharacter(inputString) {
  let freqCounter = [];
  inputString.split("").forEach(ch => {
    if (!freqCounter[ch]) freqCounter[ch] = 1;
    else freqCounter[ch]++;
  });

  //console.log(freqCounter);

  for (let i = 0; i < inputString.length - 1; i++) {
    let ch = inputString[i];
    if (freqCounter[ch] == 1) return ch;
  }
  return "No Unique Character Found";
}

//PHASE THREE: TEST
console.log(findFirstUniqueCharacter("foobar")); // f
console.log(findFirstUniqueCharacter("aabbccdef")); // d
console.log(findFirstUniqueCharacter("aabbcc")); // 'No Unique Character Found'
