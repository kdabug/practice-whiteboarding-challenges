//

function curryFunction(...someFunctions) {
  return someFunctions.map(el => {
    return el(string);
  });
}

let curriedString = curryFunction(toUpperCase)(addSpaces);
//example functions

function toUpperCase(string) {
  return string.toUpperCase();
}

function addSpaces(string) {
  return "    " + string + "    ";
}

console.log(curriedString("hello"));
