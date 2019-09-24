//PROBLEM
//Write a function that removes any duplicate letters in string.
//Ex. 'cicadas' would turn into 'ciads'

//PHASE ONE: QUESTIONS & PSEUDOCODE

//PHASE TWO: CODE

function removeDuplicateCharacters(string) {
  return string
    .split("")
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join("");
}

//PHASE THREE: TEST
console.log(removeDuplicateCharacters("cicadas"));
