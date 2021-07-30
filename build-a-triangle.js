// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(triangle) {
  let firstLines = ""
  for (let x = 1; x <= triangle; x++) {
    firstLines += makeLine(x);
  }
  return firstLines;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));