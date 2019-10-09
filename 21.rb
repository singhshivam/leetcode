# https://leetcode.com/problems/merge-two-sorted-lists/

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
	return if !l1 && !l2

	res = nil
	while l1 || l2
		if !l2 || (l1 && l1.val <= l2.val)
			node = ListNode.new(l1.val)
			l1 = l1.next
		elsif !l1 || (l2 && l2.val < l1.val)
			node = ListNode.new(l2.val)
			l2 = l2.next
		else
			puts "WTF"
		end

		if !res
			res = node
		else
			curr = res
			while curr.next
				curr = curr.next
			end
			curr.next = node
		end
	end
	res
end

