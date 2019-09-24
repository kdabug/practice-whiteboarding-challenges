#iterate
def fibI(n)

    return 1 if n <= 2
  
    fib_index = 3
    a, b = 1, 1
  
    while fib_index <= n
      c = a + b
      a = b
      b = c
      fib_index += 1
    end
  
    c
  end
  
  p (1..100).map {|i| fibI(i)}
#recursive
def fibR( n )
    return  n  if ( 0..1 ).include? n
    ( fibR( n - 1 ) + fibR( n - 2 ) )
end

puts fibR( 14 )