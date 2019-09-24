//PROBLEM
//Write a program that determines if a string is a palindrome.

//PHASE ONE: QUESTIONS & PSEUDOCODE

//PHASE TWO: CODE

function palindrome(string) {
  string = string.toLocaleLowerCase();
  return (
    Array.from(string).toString() ===
    Array.from(string)
      .reverse()
      .toString()
  );
}

//PHASE THREE: TEST
console.log(palindrome("racecar"));
console.log(palindrome("cicadas"));
