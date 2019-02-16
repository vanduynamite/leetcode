
const minIncrementForUnique = arr => {

  const counts = {};
  let min = arr[0];
  let max = arr[0];
  let numRepeats = 0;
  let steps = 0;

  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]]++;
      if (counts[arr[i]] === 2) numRepeats++;
    } else {
      counts[arr[i]] = 1;
    }

    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  let i = min;

  while (numRepeats > 0) {
    if (counts[i] > 1) {
      let numShifts = counts[i] - 1;
      steps += numShifts;
      if (counts[i+1] === undefined && numShifts === 1) numRepeats--;
      if (counts[i+1] > 1) numRepeats--;
      counts[i+1] = !counts[i+1] ? numShifts : counts[i+1]+numShifts;
    }
    i++;
  }

  return steps;

};

console.log(minIncrementForUnique([3,2,1,2,1,7]));
