const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];

console.log("My favourite " + director + " film is " + films[1]);

console.log("films at index 0: " + films[0]);
films.push("Jurassic Park");
films.push("E.T.");
console.log(director + " is the director of " + films.length + " films");
