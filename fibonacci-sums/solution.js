//PROBLEM
//Write a function to return the sum of all the numbers in the
//Fibonacci sequence up to the nth element

//PHASE ONE: QUESTIONS & PSEUDOCODE
//The Fibonacci sequence is a series of numbers where any number
//in the series is the sum of the preceding two numbers.
//If you need help on determining what the Fibonnaci sequence is
//wikipedia will help: https://en.wikipedia.org/wiki/Fibonacci_number
//Hint: the sum of the first n fib numbers is fib(n+2)-1

//PHASE TWO: CODE

function fibonacciSum(n) {
  let previousFirst = 0,
    previousSecond = 1,
    next = 1;

  for (let i = 2; i <= n + 2; i++) {
    next = previousFirst + previousSecond;
    previousFirst = previousSecond;
    previousSecond = next;
  }
  return next - 1;
}

//PHASE THREE: TEST
console.log(fibonacciSum(12));
