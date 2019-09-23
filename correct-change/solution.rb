#Assumptions -> no negative numbers  

CHANGE = [["$10", 1000],["$5", 500],["$1", 100], ["Q", 25], ["D", 10], ["N", 5], ["P", 1]]

def change(paid, price)
    amount = paid - price
  CHANGE.map do |label, value|
    nbr, amount = amount.divmod(value)
    [nbr, label]
  end
end


puts change(1068, 500)
