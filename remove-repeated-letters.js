//Return the Amount of removals so that there are no adjacent duplicate letters

function alternatingCharacters(s) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1] && s[i] !== s[i - 1]) {
      newString = newString + s[i];
      i = i + 1;
    } else if (s[i] === s[i - 1]) {
      console.log("hi");
    } else {
      newString = newString + s[i];
    }
  }
}
