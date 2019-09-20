//PROBLEM
//Write a function to return an n element in Fibonacci sequence

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
