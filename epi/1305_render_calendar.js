function printCal(arr) {
  console.log(arr);
  arr.forEach(time => {
    let str = [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '];
    for (let i = time[0]; i < time[1]; i++) str[i] = 'X';
    console.log(str.join(''));
  });
}

function numOverlapping(arr) {
  const times = [];
  arr.sort((a,b) => {return (a[1] - b[1]);});
  arr.forEach(time => {
    times.push([time[0],'start']);
    times.push([time[1],'end']);
  });
  times.sort((a,b) => {
    if (a[0] < b[0] || (a[0] === b[0] && a[1] === 'end')) return -1;
    return 1;
  });
  printCal(arr);

  let counter = 0;
  let max = 0;

  times.forEach(time => {
    if (time[1] === 'start') counter ++;
    else counter --;
    if (counter > max) max = counter;
  });

  return max;
}

// const arr = [
//   [0,1],
//   [0,3],
//   [1,2],
//   [2,5],
//   [3,6],
//   [3,7],
//   [4,7],
//   [8,9],
// ];

const arr = [];

for (let i = 0; i < 8; i++) {
  const val1 = Math.floor(Math.random() * 10 % 9);
  const val2 = Math.floor(Math.random() * 10 % (9-val1) + val1 + 1);
  arr.push([val1, val2]);
}

// console.log(arr);

console.log(numOverlapping(arr));
