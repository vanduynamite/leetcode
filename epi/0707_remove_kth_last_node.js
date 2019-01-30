
const removeKthLastNode = (head, k) => {
  const dummyHead = new Node();
  dummyHead.next = head;
  let node1 = head;
  let node2 = head;

  for (let i = 0; i < k; i++) node1 = node1.next;

  while (node1.next !== null) {
    node1 = node1.next;
    node2 = node2.next;
  }

  node2.next = node2.next.next;
  return dummyHead.next;
};
