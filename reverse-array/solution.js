//PROBLEM
//Write a function that reverses the order of an array.

//PHASE ONE: QUESTIONS & PSEUDOCODE
//Can I use Javascript's built in Array prototype reverse method?

//PHASE TWO: CODE
//non method
function reverseArray(arr) {
  let resp = new Array();
  for (var i = arr.length - 1; i >= 0; i--) {
    resp.push(arr[i]);
  }
  return resp;
}

//method
function reverseArrayMethod(arr) {
  return arr.reverse;
}
var a = [3, 5, 7, 8];
var b = reverseArr(a);
//PHASE THREE: TEST
