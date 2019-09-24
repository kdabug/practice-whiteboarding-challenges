def first_uniq_char(s)
    s.each_char.with_index do |char, i|
      if s.index(char) == s.rindex(char)
        return s[i]
      end
    end
  
    return -1
  end

  p first_uniq_char('helloh')