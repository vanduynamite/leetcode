
const isLetterConstructable = (letter, magazine) => {
  const letterCounts = {};
  let totalKeys = 0;

  for (let i = 0; i < letter.length; i++) {
    const l = letter[i];
    if (l !== ' ') {
      if (!letterCounts[l]) {
        letterCounts[l] = 0;
        totalKeys++;
      }
      letterCounts[l]++;
    }
  }

  // slow but more fun way
  // const arr = letter.split(' ').join('').split('');
  // arr.forEach(el => {
  //   if (!letterCounts[el]) letterCounts[el] = 0;
  //   letterCounts[el]++;
  // });

  for (let i = 0; i < magazine.length; i++) {
    const l = magazine[i];
    if (l !== ' ' && letterCounts[l]) {
      letterCounts[l]--;
      if (letterCounts[l] === 0) {
        delete letterCounts[l];
        totalKeys--;
      }
      if (totalKeys === 0) return true;
    }
  }

  return false;
};


const letter = 'can this be constructed';
const magazine = 'can this be constructe';
console.log(isLetterConstructable(letter, magazine));
