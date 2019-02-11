
const permutations = arr => {
  if (arr.length === 1) return [arr];

  const results = [];

  arr.forEach((el, i) => {
    const subArr = arr.slice(0,i).concat(arr.slice(i+1));
    const subPerms = permutations(subArr);
    subPerms.forEach(result => results.push([el].concat(result)));
  });

  return results;
};

const arr = [2,3,5];

console.log(permutations(arr));
