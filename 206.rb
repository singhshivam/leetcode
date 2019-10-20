# https://leetcode.com/problems/reverse-linked-list/

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
	prev = nil
	curr = head
	while curr
		nxt = curr.next
		curr.next = prev
		prev = curr
		curr = nxt
	end
	prev
end
