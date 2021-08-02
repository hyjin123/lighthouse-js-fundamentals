// Udacity section for Objects
/*
var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
  // your code goes here
  close: function() {
    if (umbrella.isOpen === false) {
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false;
      return "Julia closes the umbrella!";
    }
  }
};

console.log(umbrella.close());
*/
/*
var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

console.log(sister.paintPicture());
*/
/*
var garage = {
  "fire truck": {
    "color": "red",
    "wheels": 6,
    "operational": true
  },
  "race-car": {
    "color": "blue"
  }
}

console.log(garage["fire truck"]);
*/

/* menu items
let breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hasbrowns", "pancakes"]
};

console.log(breakfast);
*/
/*
var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  // your code goes here
  printAccountSummary: function accountSummary() {
    let message = "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
    return message;
  }
};

console.log(savingsAccount.printAccountSummary());
*/

/*facebook friends
const facebookProfile = {
  name: "Sean Jin",
  friends: 5,
  messages: ["Whats up!", "Hey!", "Hello"],
  postMessage: function(message) {
    this.messages.push(message);
  },
  deleteMessage: function(index) {
    this.messages.splice(index, 1);
  },
  addFriend: function() {
    this.friends++;
  },
  removeFriend: function() {
    this.friends--;
  }
};

facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);
*/

/*donuts revisited
*/

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function(element) {
  console.log(element.type + " donuts cost $" + element.cost + " each");
})