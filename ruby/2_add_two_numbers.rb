# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}


# You are given two non-empty linked lists representing two non-negative integers.
# The digits are stored in reverse order and each of their nodes contain a single
# digit. Add the two numbers and return it as a linked list.
#
# You may assume the two numbers do not contain any leading zero, except the
# number 0 itself.

# Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
# Output: 7 -> 0 -> 8
# Explanation: 342 + 465 = 807.

def add_two_numbers(l1, l2)

  l3 = ListNode.new(l1.val + l2.val)

  if l3.val >= 10
    l1.next ? l1.next.val = l1.next.val + 1 : l1.next = ListNode.new(1)
    l3.val %= 10
  end

  if l1.next && l2.next
    l3.next = add_two_numbers(l1.next, l2.next)
  elsif l1.next
    l3.next = add_two_numbers(l1.next, ListNode.new(0))
  elsif l2.next
    l3.next = add_two_numbers(ListNode.new(0), l2.next)
  else
    l3.next = nil
  end

  l3

end

l1 = ListNode.new(2)
l1.next = ListNode.new(4)
l1.next.next = ListNode.new(3)

l2 = ListNode.new(5)
l2.next = ListNode.new(6)
l2.next.next = ListNode.new(4)

# l1 = ListNode.new(9)
# l1.next = ListNode.new(9)
#
# l2 = ListNode.new(9)

p add_two_numbers(l1, l2)
