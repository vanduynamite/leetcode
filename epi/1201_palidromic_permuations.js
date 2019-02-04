
const palindromicPermutations = word => {
  const letters = {};

  for (let i = 0; i < word.length; i++) {
    if (letters[word[i]]) letters[word[i]]++;
    else letters[word[i]] = 1;
  }

  let numOdds = 0;

  return Object.values(letters).every(count => {
    if (count % 2 === 1) numOdds++;
    if (numOdds > 1) return false;
    else return true;
  });

};

console.log(palindromicPermutations('foobaraboof'));
console.log(palindromicPermutations('ffooobbaar'));
console.log(palindromicPermutations('foobarraboof'));
console.log(palindromicPermutations('foobraboof'));
