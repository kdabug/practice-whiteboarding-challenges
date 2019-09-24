//PROBLEM
//Write a program that finds the greatest common divisor.
//Ex. the gcd of 2 and 16 is 2. the gcd of 24 and 16 is 8.

//PHASE ONE: QUESTIONS & PSEUDOCODE
//Will the inputs always be numbers?
//Will the numbers always be positive?
//Will there only be two numbers given?

//PHASE TWO: CODE
function greatestCommonDivisor(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

//PHASE THREE: TEST
console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));
