//PROBLEM
//Write a function to return an n element in Fibonacci sequence.

//PHASE ONE: QUESTIONS & PSEUDOCODE
//The Fibonacci sequence is a series of numbers where any number
//in the series is the sum of the preceding two numbers.
//If you need help on determining what the Fibonnaci sequence is
//wikipedia will help: https://en.wikipedia.org/wiki/Fibonacci_number

//Am I looking for the most efficient way to complete this problem?
//Do I include 0?

//PHASE TWO: CODE

//iterate
//O(n)
function fibonacciIterate(n) {
  let previousFirst = 0,
    previousSecond = 1,
    next = 1;

  for (let i = 2; i <= n; i++) {
    next = previousFirst + previousSecond;
    previousFirst = previousSecond;
    previousSecond = next;
  }
  return next;
}

//loop & array
//O(n)
function fibonacciArray(number) {
  let sequence = [1, 1];
  for (let i = 2; i < number; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[number - 1];
}

function fibonacciWhile(number) {
  let sequence = [1, 1];

  while (sequence.length < n) {
    const nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }

  return sequence[number - 1];
}

//recursive
//O(n^2)
//can be made more efficient through memoization (which makes it O(n))
//read more on how to apply memoization by adding a cache at link below
//https://blog.rinatussenov.com/sequencing-fibonacci-numbers-with-javascript-c510561c6feb
function fibonacciRecursive(num) {
  if (num <= 2) return 1;
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

//Hash and lookup
//O(1)
//pros: fast
//cons: needs to have a predetermined or previously created sequence of numbers
function fibonacciHash(number) {
  let sequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  let numberZeroBased = number - 1;

  if (numberZeroBased > sequence.length)
    throw new Error("The number you provided is outside of the range");

  return sequence[numberZeroBased];
}

//Binet's Formula
function fibonacciBinet(number) {
  let sqRootOf5 = Math.sqrt(5);

  let Phi = (1 + sqRootOf5) / 2;
  let phi = (1 - sqRootOf5) / 2;

  return Math.round(
    (Math.pow(Phi, number) - Math.pow(phi, number)) / sqRootOf5
  );
}
//PHASE THREE: TEST
console.log(fibonacciIterate(14));
console.log(fibonacciArray(14));
console.log(fibonacciRecursive(14));
console.log(fibonacciBinet(14));
console.log(fibonacciHash(3));
console.log(fibonacciHash(14)); //does not work - throws error
