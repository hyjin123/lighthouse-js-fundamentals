//functions, how many hundreds can be made from a number

const howManyHundreds = function(num) {
  let container = 0;
  if (num/100 < 1) {
    container = 0;
  } else {
    container = Math.floor(num/100);
  }
  return container;
}


console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);