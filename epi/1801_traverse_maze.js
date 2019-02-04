
class Node {
  constructor(children, name, finish=false) {
    this.name = name;
    this.children = children;
    this.finish = finish;
  }
}

const traverseMaze = startNode => {
  const stack = [];
  let node = startNode;
  while (!node.finish) {
    node.children.forEach(child => stack.push(child));
    if (stack.length === 0) return false;
    node = stack.pop();
  }

  return node;
};

const traverseMazeRecursive = node => {
  if (node.finish) return [node.name];
  if (node.children.length === 0) return false;

  const results = [];
  node.children.forEach(child => {
    const result = traverseMazeRecursive(child);
    if (result) result.forEach(r => results.push([node.name].concat(r)));
  });

  return results;
};

const az = new Node([], 'az', true);
const ay = new Node([az], 'ay');
const by = new Node([ay], 'by');
const cy = new Node([by], 'cy');
const ey = new Node([], 'ey');
const dy = new Node([cy, ey], 'dy');
const dx = new Node([dy], 'dx');
const ew = new Node([], 'ew');
const dv = new Node([], 'dv'); 
const dw = new Node([dx, ew, dv], 'dw');
const cw = new Node([dw], 'cw');
const bx = new Node([by], 'bx');
const bw = new Node([cw, bx], 'bw');
const bv = new Node([bw], 'bv');

// console.log(traverseMaze(bv));
console.log(traverseMazeRecursive(bv));
