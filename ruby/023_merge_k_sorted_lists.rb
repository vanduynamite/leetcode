require 'byebug'
# Merge k sorted linked lists and return it as one sorted list.
# Analyze and describe its complexity.
#
# Example:
#
# Input:
# [
#   1->4->5,
#   1->3->4,
#   2->6
# ]
# Output: 1->1->2->3->4->4->5->6

def nodify(node_vals)
  return nil if node_vals.empty?
  head = ListNode.new(node_vals[0])
  node_vals = node_vals[1..-1]
  cur = head

  node_vals.each do |val|
    cur.next = ListNode.new(val)
    cur = cur.next
  end

  return head
end

# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def merge_k_lists(lists)
  return merge_two_lists(lists) if lists.length <= 2
  mid = lists.length / 2
  return merge_two_lists([merge_k_lists(lists[0...mid]), merge_k_lists(lists[mid..-1])])
end

def merge_two_lists(lists)
  lists.compact!
  return nil if lists.length == 0
  return lists[0] if lists.length == 1

  left = lists[0]
  right = lists[1]

  if left.val < right.val
    head = ListNode.new(left.val)
    left = left.next
  else
    head = ListNode.new(right.val)
    right = right.next
  end

  current_node = head

  until left == nil || right == nil
    if left.val < right.val
      current_node.next = ListNode.new(left.val)
      left = left.next
    else
      current_node.next = ListNode.new(right.val)
      right = right.next
    end

    current_node = current_node.next
  end

  current_node.next = left if right == nil
  current_node.next = right if left == nil

  return head

end

# def merge_k_lists_slow(lists)
#   lists.compact!
#   return nil if lists.empty?
#
#   low = lists[0].val
#   low_idx = 0
#
#   lists.each_with_index do |node, i|
#     if node.val < low
#       low = node.val
#       low_idx = i
#     end
#   end
#
#   head = ListNode.new(low)
#   current_node = head
#   lists[low_idx] = lists[low_idx].next
#   lists.compact!
#
#   until lists.empty?
#     next_low = nil
#     next_lists = []
#
#     lists.each do |node|
#       if node.val == low
#         current_node.next = ListNode.new(low)
#         current_node = current_node.next
#         next_lists << node.next if node.next
#       else
#         next_lists << node
#       end
#
#       next_low = next_lists[-1].val if next_low == nil && next_lists[-1]
#       next_low = next_lists[-1].val if next_lists[-1] && next_lists[-1].val < next_low
#
#     end
#
#     lists = next_lists
#     low = next_low
#   end
#
#   return head
#
# end


# p merge_k_lists([nodify([1,2]), nodify([1,2,3,4,5])])

# p merge_k_lists([
#   nodify([1,4,5]),
#   nodify([1,3,4]),
#   nodify([2,6]),
#   ])
p merge_k_lists([nodify([2]), nodify([]), nodify([1])])
