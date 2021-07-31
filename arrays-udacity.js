/*
let donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]);

donuts[1] = "glazed cruller";
console.log(donuts[1]);
console.log(donuts);


let udaciFamily = ["Julia", "James", "Sean"];
console.log(udaciFamily);


var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

let crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 2.5;
prices[2] = 5;
prices[6] = 7.5;
console.log(prices);

var donuts = ["glazed", "powdered", "sprinkled", "Boston Creme"];
//console.log(donuts.push("strawberry"));
//console.log(donuts.pop());
donuts.splice(1,1,"chocolate cruller", "creme de leche");
console.log(donuts);


var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.push("Purple");
console.log(rainbow);
*/

/*
function hasEnoughPlayers(team) {
  if (team.length >= 7) {
    return true;
  } else {
    return false;
  }
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
*/

/*
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor, sister, shepherd);
console.log(crew);
*/

/*
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(num, index) {
  if (num % 3 === 0) {
    test[index] = num + 100;
  }
});

console.log(test);
*/
/*
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

const totals = bills.map(function(num) {
  num *= 1.15;
  num = Number(num.toFixed(2));
  return num;
});

console.log(totals);
*/

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    if (numbers[i][j] % 2 === 0) {
      numbers[i][j] = "even";
    } else {
      numbers[i][j] = "odd";
    }
  }
}

console.log(numbers);