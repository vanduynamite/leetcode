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
require 'byebug'
def add_two_numbers(l1, l2)

  head = ListNode.new(0)
  l3 = head
  rem = 0

  until l1 == nil && l2 == nil
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + rem
    l3.val = sum % 10
    rem = sum > 9 ? 1 : 0

    l1 = l1 ? l1.next : nil
    l2 = l2 ? l2.next : nil

    if l1 || l2
      l3.next = ListNode.new(0)
      l3 = l3.next
    end

  end

  l3.next = ListNode.new(1) if rem == 1

  head

end

l1 = ListNode.new(2)
l1.next = ListNode.new(4)
l1.next.next = ListNode.new(3)

l2 = ListNode.new(5)
l2.next = ListNode.new(6)
l2.next.next = ListNode.new(4)

l1 = ListNode.new(9)
l1.next = ListNode.new(9)

l2 = ListNode.new(9)

p add_two_numbers(l1, l2)
