
function getDepth(node) {
  let depth = 0;
  while (node.parent !== null) {
    depth++;
    node = node.parent;
  }
  return depth;
}

function findLCA(a, b) {
  if (a === b) return a.parent;

  let depthA = getDepth(a);
  let depthB = getDepth(b);

  while (depthA > depthB) {
    depthA--;
    a = a.parent;
  }

  while (depthB > depthA) {
    depthB--;
    b = b.parent;
  }

  a = a.parent; b = b.parent; // if a is above b in the tree

  while (a !== b) {
    a = a.parent;
    b = b.parent;
  }

  return a;
}

class TreeNode {
  constructor(letter, value, left=null, right=null, parent=null) {
    this.letter = letter;
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

const p = new TreeNode('p', 28);
const o = new TreeNode('o', 271, null, p);
const n = new TreeNode('n', 257);
const m = new TreeNode('m', 641);
const l = new TreeNode('l', 401, null, m);
const k = new TreeNode('k', 1, l, n);
const j = new TreeNode('j', 2, null, k);
const i = new TreeNode('i', 6, j, o);
const h = new TreeNode('h', 17);
const g = new TreeNode('g', 3, h);
const f = new TreeNode('f', 561, g);
const e = new TreeNode('e', 0);
const d = new TreeNode('d', 28);
const c = new TreeNode('c', 271, d, e);
const b = new TreeNode('b', 6, c, f);
const a = new TreeNode('a', 314, b, i);

p.parent = o;
o.parent = i;
n.parent = k;
m.parent = l;
l.parent = k;
k.parent = j;
j.parent = i;
i.parent = a;
h.parent = g;
g.parent = f;
f.parent = b;
e.parent = c;
d.parent = c;
c.parent = b;
b.parent = a;

console.log(findLCA(d, b));
