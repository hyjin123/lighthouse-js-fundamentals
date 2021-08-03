//testing out new judging system on the best tomatoes based on their redness OR plumpness

function judgeVegetable(vegetables, characteristics) {
  let winner = "";
  if (characteristics === "redness") {
    for (let i = vegetables.length - 1; i <= 1; i--) {
      if (vegetables[i].redness >= vegetables[i-1].redness) {
        winner = vegetables[i].submitter;
      } else {
        winner = vegetables[i-1].submitter;
      }
    }
  } else if (characteristics === "plumpness") {
      for (let i = 0; i < vegetables.length; i++) {

      }
  }
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

const metric = 'redness'

judgeVegetable(vegetables, metric)