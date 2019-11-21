function factorialFor(n) {
  let result = 1;
  for (let i = 0; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialWhile(n) {
  let result = 1;
  while (n > 0) {
    result *= i;
    n--;
  }
  return result;
}

function factorialRecursion(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorialRecursion(n - 1);
}
