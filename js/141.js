// https://leetcode.com/problems/linked-list-cycle/
// PS: No Ruby option for this question
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	slow = head
	fast = head
	res = false
	while (fast && slow) {
		slow = slow.next
		fast = fast.next && fast.next.next
		if (slow && fast && slow == fast) {
			res = true
			break    
		}
	}
	return res
};
