// https://leetcode.com/problems/palindrome-linked-list/
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
var isPalindrome = function(head) {
	let front='', back=''
	if (!head) {
		return true
	}
	while (head) {
		front += `${head.val}-`
		back = `${head.val}-` + back
		head = head.next
	}
	return front === back
};


///////////////////////////////////////////////
// ALTERNATIVE SOLUTION
///////////////////////////////////////////////
var isPalindrome = function(head) {
	if (!head || !head.next) {
		return true
	}
	let p = head, q = head
	let second_start
	let arr1=[], arr2=[]
	while (true) {
		arr1.push(p.val)
		q = q.next.next
		if (!q) { // even length
			second_start = p.next
			break
		} else if (!q.next) { // odd length
			second_start = p.next.next
			break
		}
		p = p.next
	}
	while (second_start) {
		arr2.push(second_start.val)
		second_start = second_start.next
	}
	console.log(arr1, arr2)
	arr2.reverse()
	return JSON.stringify(arr1) === JSON.stringify(arr2) 
};
