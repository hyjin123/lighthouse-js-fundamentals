// Concatenate the arrays from both researchers into a single array

/* using concat.() to solve.
function concat(array1, array2) {
  const array3 = array1.concat(array2);
  return array3;
}
*/

//using regular for loop to solve.
function concat(array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return array1;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);