def palindrome?(str)
    str == str.reverse
  end

 puts palindrome?('racecar')
 puts palindrome?('cicadas')