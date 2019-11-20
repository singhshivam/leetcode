// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	if (!head) {
		return head
	}
	let prev = undefined
	let curr = head
	while (curr) {
		let next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}
	return prev
};
