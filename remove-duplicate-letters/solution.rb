

def remove_repeats(string)
    str = string.split("")
    hash = {} 
    count = 0
     while count < str.length do
      if hash[str[count]] == nil

        hash[str[count]] = 1
        count = count + 1
      else
 
        str.delete_at(count);
      end
    end
    puts str.join('')
end
  

puts remove_repeats("lala c")