//PROBLEM
//Write a function that reverses the order of a string.

//PHASE ONE: QUESTIONS & PSEUDOCODE
//Can I use built in methods?

//PHASE TWO: CODE

function reverseString(str) {
  let reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

//es6
function reverseES(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

//reverse method
function reverseMethod(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

//spread opperator & reverse method
function reverseSpread(str) {
  return [...str].reverse().join("");
}

//reduce method
function reverseReduce(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

//recursion
function reverseRecursion(str) {
  //   if (str === "") {
  //     return str;
  //   } else {
  //     return reverse(str.substr(1)) + str[0];
  //   }
  return str ? reverse(str.substr(1)) + str[0] : str;
}

//PHASE THREE: TEST

console.log(reverseArray([2, 3, 4, 5]));
console.log(reverseArrayMethod([2, 3, 4, 5]));
