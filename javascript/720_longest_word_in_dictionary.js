
class Node {
  constructor(val) {
    this.val = val;
    this.children = {
      'k': new Node('k'),
    };
  }
}

const longestWord = (words) => {
  words.sort();
  const root = new Node('');
  let result = '';

  words.forEach(word => {
    if (word.length > result.length + 1) return;

    let node = root;
    for (let i = 0; i < word.length - 1; i++) {
      if (node.children[word[i]]) node = node.children[word[i]];
      else return;
    }

    node.children[word[word.length - 1]] = new Node(word[word.length - 1]);
    if (word.length > result.length) result = word;

  });

  return result;
};

console.log(longestWord(["w","wo","wor","worl", "world"]));
console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]));
