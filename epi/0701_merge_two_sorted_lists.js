class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const solution = (l1, l2) => {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  const dummyHead = new Node(null);
  let tail = dummyHead;
  let n1 = l1;
  let n2 = l2;

  while (n1 !== null && n2 !== null) {
    if (n1.value < n2.value) {
      tail.next = n1;
      n1 = n1.next;
    } else {
      tail.next = n2;
      n2 = n2.next;
    }
    tail = tail.next;
  }

  if (n1 === null) tail.next = n2;
  if (n2 === null) tail.next = n1;

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

let l1 = createLinkedList([2, 5, 7]);
console.log(l1);
let l2 = createLinkedList([3, 11]);
let s = solution(l1,l2);
while (s !== null) {
  console.log(s.value);
  s = s.next;
}
console.log('');

l1 = createLinkedList([]);
l2 = createLinkedList([3, 11]);
s = solution(l1,l2);
while (s !== null) {
  console.log(s.value);
  s = s.next;
}
console.log('');

l1 = createLinkedList([2, 5, 7]);
l2 = createLinkedList([]);
s = solution(l1,l2);
while (s !== null) {
  console.log(s.value);
  s = s.next;
}
console.log('');

l1 = createLinkedList([1, 1, 1, 1, 1]);
l2 = createLinkedList([2]);
s = solution(l1,l2);
while (s !== null) {
  console.log(s.value);
  s = s.next;
}
console.log('');

l1 = createLinkedList([]);
l2 = createLinkedList([]);
s = solution(l1,l2);
while (s !== null) {
  console.log(s.value);
  s = s.next;
}
console.log('');
