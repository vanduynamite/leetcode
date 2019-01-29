

const solution = (cities, mpg) => {
  let lowest = null;
  let lowestIndex = null;
  let sum = 0;

  for (let i = 0; i < cities.length; i++) {
    sum += cities[i][1] * mpg - cities[i][2];
    if (lowest === null || sum < lowest) {
      lowest = sum;
      lowestIndex = i;
    }
  }

  return cities[(lowestIndex+1)%cities.length][0];
};


const cities = [
  ['A', 50, 900],
  ['B', 20, 600],
  ['C', 5, 200],
  ['D', 30, 400],
  ['E', 25, 600],
  ['F', 10, 200],
  ['G', 10, 100],
];

console.log(solution(cities, 20));
