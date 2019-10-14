# https://leetcode.com/problems/swap-nodes-in-pairs/

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
def swap(i, j)
	tmp = i.val
	i.val = j.val
	j.val = tmp
end

def swap_pairs(head)
	i = head
	j = head && head.next
	return head if !j

	while j
		swap(i, j)
		i = i.next.next
		j = j.next && j.next.next
	end
	head
end
