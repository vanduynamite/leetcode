# Merge two sorted linked lists and return it as a new list. The new list should
# be made by splicing together the nodes of the first two lists.
#
# Example:
#
# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4

class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def merge_two_lists(l1, l2)
  return nil unless l1 || l2
  return l1 unless l2
  return l2 unless l1

  head = ListNode.new(0)
  l3 = head

  while l1 && l2

    if l1.val < l2.val
      l3.val = l1.val
      l1 = l1.next
    else
      l3.val = l2.val
      l2 = l2.next
    end

    l3.next = ListNode.new(0)
    l3 = l3.next

  end

  if l1
    l3.val = l1.val
    l3.next = l1.next
  end

  if l2
    l3.val = l2.val
    l3.next = l2.next
  end

  head

end

l1 = ListNode.new(2)
l1.next = ListNode.new(3)
l1.next.next = ListNode.new(4)

l2 = ListNode.new(2)
l2.next = ListNode.new(4)
l2.next.next = ListNode.new(5)
# l2.next.next.next = ListNode.new(18)

# l1 = nil
# l2 = nil
# l1 = ListNode.new(9)
# l1.next = ListNode.new(9)
#
# l2 = ListNode.new(9)

p merge_two_lists(l1, l2)
