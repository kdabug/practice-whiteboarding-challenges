//PROBLEM
//Write a function to return an n element in Fibonacci sequence.

//PHASE ONE: QUESTIONS & PSEUDOCODE
//The Fibonacci sequence is a series of numbers where any number
//in the series is the sum of the preceding two numbers.
//If you need help on determining what the Fibonnaci sequence is
//wikipedia will help: https://en.wikipedia.org/wiki/Fibonacci_number

//PHASE TWO: CODE

//recursive
function fibonacci(num) {
  if (num <= 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

//PHASE THREE: TEST
console.log(fibonacci(14));
