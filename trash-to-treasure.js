// create a function that will be responsible for increasing the garbage count for waste, recycling, or compost
function smartGarbage(trash, bins) {
  if (trash === "waste") {
    bins.waste++;
  } else if (trash === "recycling") {
    bins.recycling++;
  } else if (trash === "compost") {
    bins.compost++;
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
