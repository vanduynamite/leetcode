

const fillKnapsack = (items, capacity) => {

  // what is the best option at any weight?

  // better yet, how to store these choices?
  // well I only need to return the best one
  // and at each recursive call, in the end only the best one returns up
  // they have to be concatenated together

  // maybe sort the items first? that way we can get the highest weights first?
  // leave for a future improvement
// console.log(items);
  const possibilities = [];
  for (let i = items.length-1; i >= 0; i--) {
    const item = items[i];
    if (item.weight <= capacity) {
      const subPossibilities = fillKnapsack(items.slice(0,i), capacity - item.weight);
      subPossibilities.forEach(sP => {
        possibilities.push([item].concat(sP));
      });
    }
  }

  return possibilities;
};



// name, value, weight
const arr = [
  {id: 'B', value: 35, weight: 8},
  {id: 'L', value: 40, weight: 10},
  {id: 'P', value: 99, weight: 10},
  {id: 'A', value: 65, weight: 20},
  {id: 'H', value: 155, weight: 25},
  {id: 'I', value: 120, weight: 30},
  {id: 'E', value: 65, weight: 40},
  {id: 'O', value: 220, weight: 40},
  {id: 'N', value: 100, weight: 50},
  {id: 'D', value: 195, weight: 55},
  {id: 'C', value: 245, weight: 60},
  {id: 'J', value: 320, weight: 65},
  {id: 'F', value: 150, weight: 70},
  {id: 'K', value: 75, weight: 75},
  {id: 'G', value: 275, weight: 85},
  {id: 'M', value: 200, weight: 95},
];

const result = fillKnapsack(arr, 18);

result.forEach(r => console.log(r));
