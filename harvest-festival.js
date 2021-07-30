const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function(moves) {
  const finalCoordinate = [0, 0];
  for (const move of moves) {
    if (move === "north") {
      finalCoordinate[1] += 1; 
    } else if (move === "south") {
      finalCoordinate[1] -= 1;
    } else if (move === "west") {
      finalCoordinate[0] -= 1;
    } else if (move === "east") {
      finalCoordinate[0] += 1;
    }
  }
  return finalCoordinate;
}

console.log(finalPosition(moves))