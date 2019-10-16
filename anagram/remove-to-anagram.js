// RETURN minimum letters to be removed in order to make two strings an anagram.

function changeToAnagram() {
  if (a === b) {
    return true;
  }

  let str1 = a
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let str2 = b
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let removed = 0;

  let counts = {};
  for (let i = 0; i < str1.length; i++) {
    let index = str1.charCodeAt(i) - 97;
    counts[index] = (counts[index] || 0) + 1;
  }
  console.log(counts);
  for (let j = 0; j < str2.length; j++) {
    let index = str2.charCodeAt(j) - 97;
    if (!counts[index]) {
      removed = removed + 1;
      console.log(index, " does not exist", removed);
    }
    if (counts[index]) {
      counts[index]--;
    }
  }
  console.log(counts);
  let reserved = [];
  reserved = Object.values(counts);
  let added = reserved.reduce((a, b) => a + b, 0);
  console.log(added);
  removed = removed + added;
  return removed;
}
