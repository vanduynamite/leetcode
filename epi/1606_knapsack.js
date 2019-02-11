

const knapsack = (items, capacity) => {
  const bests = [[]];
  for (let j = 0; j <= capacity; j++) bests[0][j] = 0;

  for (let i = 1; i <= items.length; i++) {
    item = items[i - 1];
    bests[i] = [];
    for (let j = 0; j <= capacity; j++) {
      bests[i][j] = bests[i - 1][j];
      if (item[1] <= j) {
        const bestWith = item[0] + bests[i - 1][j - item[1]];
        if (bestWith > bests[i][j]) bests[i][j] = bestWith;
      }
    }
  }

  return bests[bests.length - 1][capacity];
};


// name, value, weight
const arr = [
  [35, 8],
  [40, 10],
  [99, 10],
  [65, 20],
  [155, 25],
  [120, 30],
  [65, 40],
  [220, 40],
  [100, 50],
  [195, 55],
  [245, 60],
  [320, 65],
  [150, 70],
  [75, 75],
  [275, 85],
  [200, 95],
];

const result = knapsack(arr, 130);
console.log(result); //695

// const arr = [
  //   {id: 'B', value: 35, weight: 8},
  //   {id: 'L', value: 40, weight: 10},
  //   {id: 'P', value: 99, weight: 10},
  //   {id: 'A', value: 65, weight: 20},
  //   {id: 'H', value: 155, weight: 25},
  //   {id: 'I', value: 120, weight: 30},
  //   {id: 'E', value: 65, weight: 40},
  //   {id: 'O', value: 220, weight: 40},
  //   {id: 'N', value: 100, weight: 50},
  //   {id: 'D', value: 195, weight: 55},
  //   {id: 'C', value: 245, weight: 60},
  //   {id: 'J', value: 320, weight: 65},
  //   {id: 'F', value: 150, weight: 70},
  //   {id: 'K', value: 75, weight: 75},
  //   {id: 'G', value: 275, weight: 85},
  //   {id: 'M', value: 200, weight: 95},
  // ];
