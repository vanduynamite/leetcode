var hasCycle = function(head) {
  if (!head) return false;

  let i1 = head;
  let i2 = head.next;

  while (i2 !== null) {
    i1 = i1.next;
    if (!i2.next) return false;
    i2 = i2.next.next;
    if (i1 == i2) return true;
  }
  return false;
};
