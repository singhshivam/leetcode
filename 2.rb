# https://leetcode.com/problems/add-two-numbers/
=begin
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
=end

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
def ll_to_num(ll)
	arr = []
	while ll.next != nil
		arr << ll.val
		ll = ll.next
	end
	arr << ll.val
	arr.reverse.join.to_i
end

def num_to_ll(num)
	arr = num.to_s.chars.reverse.map(&:to_i)
	ll = ListNode.new(arr[0])
	current_node = ll
	arr[1..-1].each { |a|
		current_node.next = ListNode.new(a)
		current_node = current_node.next
	}
	ll
end

def add_two_numbers(l1, l2)
	sum = ll_to_num(l1) + ll_to_num(l2)
	num_to_ll(sum)
end
