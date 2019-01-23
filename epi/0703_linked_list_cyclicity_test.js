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

const solution = head => {
  const dummyHead = new Node(null, head);

  let i1 = dummyHead.next;
  let i2 = dummyHead.next.next;

  while (i2.next !== null && i2 !== i1) {
    i1 = i1.next;
    i2 = i2.next.next;
  }

  if (i1 === i2) {
    const cycleLength = getCycleLength(i1);
    i1 = dummyHead.next;
    i2 = dummyHead.next;
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


let l1 = createCyclicLinkedList([1, 2, 3, 4, 5, 6], 6);
let s = solution(l1);
console.log(s);
