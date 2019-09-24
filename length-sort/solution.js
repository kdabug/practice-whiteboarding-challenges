//PROBLEM
//Write a function that sorts by length.

//PHASE ONE: QUESTIONS & PSEUDOCODE
//Do I sort the length descending or ascending?
//Is the input many strings or an array of strings.

//PHASE TWO: CODE
function lengthSort(arr) {
  arr.sort(function(a, b) {
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return b.length - a.length;
  });
}

//PHASE THREE: TEST
