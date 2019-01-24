const getCycleLength = node => {
  const startNode = node;
  node = node.next;
  let cycleLength = 1;
  while (node !== startNode) {
    cycleLength++;
    node = node.next;
  }
  return cycleLength;
};

var detectCycle = function(head) {
  if (!head) return null;

  let i1 = head;
  let i2 = head.next;

  while (i2 !== null && i2 !== i1) {
    i1 = i1.next;
    if (!i2.next) return null;
    i2 = i2.next.next;
  }

  if (i1 === i2) {
    const cycleLength = getCycleLength(i1);
    i1 = head;
    i2 = head;
    for (i = 0; i < cycleLength; i++) i2 = i2.next;

    while (i1 !== i2) {
      i1 = i1.next;
      i2 = i2.next;
    }

    return i1;

  } else {
    return null;
  }

};





class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

const createCyclicLinkedList = (arr, cycleStart=null) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  arr.forEach(el => {
    const node = new Node(el);
    tail.next = node;
    tail = node;
  });

  if (cycleStart) {
    let thisNode = dummyHead;
    for (let i = 0; i < cycleStart; i++) thisNode = thisNode.next;
    tail.next = thisNode;
  }

  return dummyHead.next;
};

let l1 = createCyclicLinkedList([3, 2, 0, -4], 2);
let s = detectCycle(l1);
console.log(s);
