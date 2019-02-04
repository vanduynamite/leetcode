class Node {
  constructor(word, depth) {
    this.word = word;
    this.depth = depth;
  }
}


const transformString = (word, end, dictSet) => {
  const alphabet = 'abcdefghijlkmnopqrstuvwxyz'.split('');
  if (dictSet.has(word)) dictSet.delete(word);
  else return -1;

  const queue = [new Node(word, 0)];

  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.word);
    for (let i = 0; i < node.word.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        const nextWord = node.word.slice(0,i) + alphabet[j] + node.word.slice(i+1);
        if (nextWord === end) return node.depth + 1;
        if (dictSet.has(nextWord)) {
          dictSet.delete(nextWord);
          queue.push(new Node(nextWord, node.depth + 1));
        }
      }
    }

  }

  return -1;
};





const dictSet = new Set();
dictSet.add('cat');
dictSet.add('car');
dictSet.add('cot');
dictSet.add('dot');
dictSet.add('dog');
dictSet.add('bat');
dictSet.add('bar');
dictSet.add('bag');
dictSet.add('bog');

console.log(transformString('cat', 'dog', dictSet));
