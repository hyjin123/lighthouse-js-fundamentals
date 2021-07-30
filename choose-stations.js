const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations(stations) {
  let eligibleStation = [];
  for (let i = 0; i < stations.length; i++) {
    if (stations[i][1] >= 20 && (stations[i][2] === "school" || stations[i][2] === "community centre")) {
      eligibleStation.push(stations[i][0]);
    }
  }
  return eligibleStation;
}

console.log(chooseStations(stations))

/*
function chooseStations(stations) {
  const goodStations = [];
  for (const station of stations) {
    const capacity = station[1];
    if (capacity >= 20) {
      const type = station[2];
      if (type === "school" || type === "community centre") {
        goodStations.push(station[0]);
      }
    }
  }
  return goodStations
}
console.log(chooseStations(stations));

*/

/*
let hello = [];
for (let i = 0; i <=0; i++) {
  if(true) {
    hello.push("hello");
  }
}
console.log(hello);
*/
