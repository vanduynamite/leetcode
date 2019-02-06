
class TrieNode {
  constructor(val, completeWord=false) {
    this.val = val;
    this.children = {};
    this.completeWord = completeWord;
  }
}

var Trie = function() {
  this.root = new TrieNode('');
};

Trie.prototype.insert = function(word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    if (!node.children[word[i]]) node.children[word[i]] = new TrieNode(word[i]);
    node = node.children[word[i]];
  }

  node.completeWord = true;

  return null;
};

Trie.prototype.search = function(word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    node = node.children[word[i]];
    if (!node) return false;
  }

  return node.completeWord;
};

Trie.prototype.startsWith = function(prefix) {
  let node = this.root;

  for (let i = 0; i < prefix.length; i++) {
    node = node.children[prefix[i]];
    if (!node) return false;
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


// const trie = Object.create(Trie).createNew();

const trie = new Trie();

console.log(trie.insert("apple"));
console.log(trie.search("apple"));   // returns true
console.log(trie.search("app"));     // returns false
console.log(trie.startsWith("app")); // returns true
console.log(trie.insert("app"));
console.log(trie.search("app"));     // returns true
