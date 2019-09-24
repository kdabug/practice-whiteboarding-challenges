
def length_sort(arr)
arr.sort_by(&:length)
end

p length_sort(['la', 'laa', 'lalalalala', 'lala'])