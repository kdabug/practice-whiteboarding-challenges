function arrayPairs(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i];
    for (let j = i + 1; j < arr.length; i++) {
      let secondNum = arr[j];
      if (firstNum + secondNum === target) {
        result.push([firstNum, secondNum]);
      }
    }
  }
  return result;
}

function arrayPairsObj(arr, target) {
  const result = [];
  const checkedObject = {};

  for (let i = 0; i < arr.length; i++) {
    checkedObject[arr[i]] = target - arr[i];
  }

  const values = checkedObject.values;
  for (let i = 0; i < values.length; i++) {
    if (arr.includes(values[i])) {
      result.push([values[i], target - values[i]]);
    }
  }
  return result;
}
