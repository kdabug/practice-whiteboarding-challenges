//PROBLEM
//Write a program that finds the least common multipe.
//Ex. the lcm of 10 and 15 is 30. the lcm of 6 and 8 is 24.

//PHASE ONE: QUESTIONS & PSEUDOCODE
//Will the inputs always be numbers?
//Will the numbers always be positive?
//Will there only be two numbers given?

//PHASE TWO: CODE

//method uses GCD
function leastCommonMultiple(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  return !x || !y ? 0 : Math.abs((x * y) / greatestCommonDivisor(x, y));
}

function greatestCommonDivisor(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

//interested in how to find the lcm of more than two numbers? look at the link below
//https://www.w3resource.com/javascript-exercises/javascript-math-exercise-11.php

//PHASE THREE: TEST

console.log(leastCommonMultiple(3, 15));
console.log(leastCommonMultiple(10, 15));
