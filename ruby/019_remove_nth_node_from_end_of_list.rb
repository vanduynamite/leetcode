# Given a linked list, remove the n-th node from the end of list and return its head.
#
# Example:
#
# Given linked list: 1->2->3->4->5, and n = 2.
#
# After removing the second node from the end, the linked list becomes 1->2->3->5.
# Note:
#
# Given n will always be valid.
#
# Follow up:
#
# Could you do this in one pass?

# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def remove_nth_from_end(head, n)

  arr = []
  cur = head

  while cur
    arr << cur
    cur = cur.next
  end


  if n == arr.length
    head = arr[1]
  else
    arr[arr.length - n - 1].next = arr[arr.length - n].next
  end


  head

end

l1 = ListNode.new(1)
l1.next = ListNode.new(2)
l1.next.next = ListNode.new(3)
l1.next.next.next = ListNode.new(4)
l1.next.next.next.next = ListNode.new(5)

l1 = ListNode.new(9)
# l1.next = ListNode.new(9)

p remove_nth_from_end(l1, 1)
