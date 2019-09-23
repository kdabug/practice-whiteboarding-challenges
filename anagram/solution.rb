def is_anagram?(first_word, second_word)
    if first_word.chars.sort.join == second_word.chars.sort.join
        puts true
    else puts false
    end
end

is_anagram?('mary', 'army')