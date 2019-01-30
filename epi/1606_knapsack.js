

const fillKnapsack = (items, capacity) => {

  const results = [];

  const nextBestChoice = bestChoice(items, capacity);
  results.push(nextBestChoice);

  return results;
};

// what is the best option at any weight?


// name, value, weight
const arr = [
  ['A', 65, 20],
  ['B', 35, 8],
  ['C', 245, 60],
  ['D', 195, 55],
  ['E', 65, 40],
  ['F', 150, 70],
  ['G', 275, 85],
  ['H', 155, 25],
  ['I', 120, 30],
  ['J', 320, 65],
  ['K', 75, 75],
  ['L', 40, 10],
  ['M', 200, 95],
  ['N', 100, 50],
  ['O', 220, 40],
  ['P', 99, 10],
];

console.log(fillKnapsack(arr, 130));
