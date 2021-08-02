// Building a function that determines the lasti ndex of an item in an array
function lastIndexOf(array, num) {
  let neverOccurs = -1; //prin out -1 if the value never occurs in an array
  if (array === []) {
    return neverOccurs;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (num === array[i]) {
      return i;
    }
  }
  return neverOccurs;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);