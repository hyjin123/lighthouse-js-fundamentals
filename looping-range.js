//The function takes 3 integer parameter and it should return an array of numbers from start to end counting by step

function range(start, end, step) {
  let emptyArray = []; //returning an empty array if conditions are not met
  let newArray = []; //returning a new array if all conditions are met
  // Had to put this if statement before the for loop because if the step was negative, it would be infinite loop...
  if (start === "undefined" || end === "undefined" || step === "undefined") {
    return emptyArray;
  } else if (start > end) {
    return emptyArray;
  } else if (step === 0 || step < 0) {
    return emptyArray;
  }
  for (let i = start; i <= end; i += step) {
    newArray.push(i);
  }
  return newArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));