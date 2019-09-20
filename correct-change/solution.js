//PROBLEM:
//I own a store and I am tired of my employees figuring out
//correct change for a customer's purchase manually.
//Please help me - find a way to calculate the correct change
//in tens, five, and one dollar bills as well as
//correct coins (including quarters, dimes, nickels, and pennies).

//PHASE ONE: QUESTIONS & PSEUDOCODE

//Will the customer always provide enough money to cover the price of the item?
//Will the customer ever give an amount that requires bills larger than a $10 bill?

//For this problem, I'm given a price of an item and the amount the customer paid for that item.
//I expect to return the exact change given that price and amount paid.
//To do this, I will need to use a ....... which will allow me to .......

//PHASE TWO: CODE
function correctChange(amountPaid, purchasePrice) {
  let change = amountPaid - purchasePrice;
  let response = {};
  if (change < 0) {
    return "insufficient amount paid";
  }
  while (change.toFixed(2) > 0) {
    console.log(change);
    change = change.toFixed(2);
    if (change - 10 >= 0) {
      change = change - 10;
      response["tens"] ? response["tens"]++ : (response["tens"] = 1);
    } else if (change - 5 >= 0) {
      change = change - 5;
      response["fives"] ? response["fives"]++ : (response["fives"] = 1);
    } else if (change - 1 >= 0) {
      change = change - 1;
      response["ones"] ? response["ones"]++ : (response["ones"] = 1);
    } else if (change - 0.25 >= 0) {
      change = change - 0.25;
      response["quarters"]
        ? response["quarters"]++
        : (response["quarters"] = 1);
    } else if (change - 0.1 >= 0) {
      change = change - 0.1;
      response["dimes"] ? response["dimes"]++ : (response["dimes"] = 1);
    } else if (change - 0.05 >= 0) {
      change = change - 0.05;
      response["nickels"] ? response["nickels"]++ : (response["nickels"] = 1);
    } else if (change - 0.01 >= 0) {
      change = change - 0.01;
      response["pennies"] ? response["pennies"]++ : (response["pennies"] = 1);
    }
  }
  return response;
}

//PHASE THREE: TEST
console.log(correctChange(10, 4.58));
