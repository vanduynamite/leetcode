class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

const solution = (L, s, f) => {
  const dummyHead = new Node(null, L);
  let lastNode = dummyHead;
  let thisNode = lastNode.next;
  let nextNode = thisNode.next;

  let count = 1;

  while (count < s) {
    count++;
    lastNode = thisNode;
    thisNode = nextNode;
    nextNode = thisNode.next;
  }

  // at this point thisNode is the first node we need to switch
  const subHead = lastNode; //1
  const subTail = thisNode; //2
  // eventually subHead.next and subTail.next will be assigned

  while (count < f) {
    count++;                  //3     4     5
    lastNode = thisNode;      //2     3     4
    thisNode = nextNode;      //3     4     5
    nextNode = thisNode.next; //4     5     null or whatever
    thisNode.next = lastNode; //3->2  4->3  5->4
  }

  // at the end of this loop, thisNode is the last node to switch

  subHead.next = thisNode;  //1->5
  subTail.next = nextNode;  //2->null or whatever

  return dummyHead.next;
};




const createLinkedList = arr => {
  const dummyHead = new Node(null);
  let tail = dummyHead;
  arr.forEach(el => {
    const node = new Node(el);
    tail.next = node;
    tail = node;
  });
  return dummyHead.next;
};

let l1 = createLinkedList([1, 2, 3, 4, 5, 6]);
let s = solution(l1, 1, 6);
while (s !== null) {
  console.log(s.value);
  s = s.next;
}
