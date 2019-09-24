def fib_sum(n)
    return 1 if n <= 2
  
    fib_index = 3
    a, b = 1, 1
  
    while fib_index <= n + 2
      c = a + b
      a = b
      b = c
      fib_index += 1
    end
  
    c -1
  end
  
  p fib_sum(12)