//PROBLEM:
//Determine if two strings are anagrams.

//PHASE ONE: QUESTIONS & PSEUDOCODE

//Are the two strings both (always) lowercase?
//Are the two strings always going to be the same length?
//Will the two strings always be single words?
//Do spaces matter for the anagram to be correct?
//     i.e. could 'hillary' be an anagram for 'yar hill'

//So I am going to take the two strings you give me as arguments
//And I want to return true if the two are anagrams and false if they are not.
//In order to do this, I need to check if each character used in the first string
//is used the same number of times in the second string.
//If spaces do not matter, I need to remove any spaces found in either of the original strings.
//I will need to use a.....(loop, sorting algorithm, etc.) to do...... so that .......

//PHASE TWO: DRAFT CODE
function anagram(str1, str2) {
  if (str1 === str2) {
    return true;
  }
  let counts = {};
  for (let i = 0; i < str1.length; i++) {
    let index = str1.charCodeAt(i) - 97;
    counts[index] = (counts[index] || 0) + 1;
  }
  for (let j = 0; j < str2.length; j++) {
    let index = str2.charCodeAt(j) - 97;
    if (!counts[index]) {
      return false;
    }
    counts[index]--;
  }
  return true;
}

//Address limitations of above and refactor
//LIMITATION -> will still say true if the first string has more of one character than the second
//Strings need to be the same length including spaces

//REFACTORED CODE
function refactoredAnagram(str1, str2) {
  return str1
    .toLowerCase()
    .split("")
    .sort()
    .join("") ===
    str2
      .toLowerCase()
      .split("")
      .sort()
      .join("")
    ? true
    : false;
}

//PHASE THREE: TEST

console.log(anagram("mary", "army"));
console.log(anagram("the litttttle one", "the litttle one"));

console.log(refactoredAnagram("mary", "army"));
console.log(refactoredAnagram("the litttttle one", "the litttle one"));
