const removeNthFromEnd = (head, n) => {
    const dummyHead = new ListNode();
    dummyHead.next = head;

    let node1 = dummyHead;
    let node2 = dummyHead;

    for (let i = 0; i < n; i++) node1 = node1.next;

    while (node1.next !== null) {
        node1 = node1.next;
        node2 = node2.next;
    }

    node2.next = node2.next.next;
    return dummyHead.next;
};
