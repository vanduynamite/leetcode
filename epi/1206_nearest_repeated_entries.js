
const nearestRepeatedEntries = sentence => {
  const arr = sentence.split(' ');
  const entries = {};
  let worstWord;
  arr.forEach((word, i) => {
    if (!entries[word]) {
      entries[word] = {'last': i};
    } else {
      if (!worstWord || i - entries[word].last < entries[worstWord].dist) {
        worstWord = word;
        entries[word].dist = i - entries[word].last;
      }
      entries[word].last = i;
    }
  });
  return worstWord;
};

// const sentence = 'all work and no play makes for no work no fun and no results';
const sentence = 'all work and play makes for no all fun and results results';
console.log(nearestRepeatedEntries(sentence));
