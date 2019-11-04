// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let prev, curr, ahead
	curr = head
	ahead = head
	let len = 0
	for (let i = 0; i < n; i++) {
		if (ahead) {
			ahead = ahead.next
			len += 1
		}
	}
	while (ahead) {
		ahead = ahead.next
		curr = curr.next
		if (!prev) {
			prev = head
		} else {
			prev = prev.next
		}
		len += 1
	}
	if (prev) {
		prev.next = curr.next
	} else {
		head = curr.next
	}
	return head
};
