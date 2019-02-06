class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = null;
  }
}

function optimizedLCA(n1, n2) {
  const visited = new Set();

  while (true) {
    n1 = n1.parent;
    if (visited.has(n1)) return n1.value;
    visited.add(n1);
    n2 = n2.parent;
    if (visited.has(n2)) return n2.value;
    visited.add(n2);
  }
}

const i = new Node(75);
const g = new Node(70, null, i);
const f = new Node(50);
const c = new Node(60, f, g);
const d = new Node(10);
const e = new Node(30);
const b = new Node(20, d, e);
const a = new Node(40, b, c);

b.parent = a;
c.parent = a;
d.parent = b;
e.parent = b;
f.parent = c;
g.parent = c;
i.parent = g;

console.log(optimizedLCA(i, d));
