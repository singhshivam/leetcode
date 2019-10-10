# https://leetcode.com/problems/merge-k-sorted-lists/

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode[]} lists
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
		end

		if res
			curr = res
			while curr.next
				curr = curr.next
			end
			curr.next = node
		else
			res = node
		end
	end
	res
end

def merge_k_lists(lists, sindex=0, eindex=lists.size-1)
	# handle [[]] ==> []
	#lists.select! { |list| list.class == ListNode }
	return if lists.empty?
	return lists[sindex] if sindex == eindex


	#puts lists.inspect
	mid = (sindex+eindex)/2
	left = merge_k_lists(lists, sindex, mid)
	right = merge_k_lists(lists, mid+1, eindex)
	merge_two_lists(left, right)
end
