//testing out new judging system on the best tomatoes based on their redness OR plumpness

function judgeVegetable(vegetables, characteristics) {
  let winner = "";
  let max = 0;
  let maxIndex = 0;
  const newArray = vegetables.map(element => element[characteristics]);
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) {
      max = newArray[i];
      maxIndex = i;
    }
  }
  winner = vegetables[maxIndex].submitter;
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));