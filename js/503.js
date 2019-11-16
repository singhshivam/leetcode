// https://leetcode.com/problems/next-greater-element-ii/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
	let len = nums.length
	let stack = []
	let res = Array(len).fill(-1)
	for (let i=0; i<2*len; i++) {
		if (stack.length == 0) {
			stack.push(i%len)
		} else if (nums[stack[stack.length-1]] > nums[i%len]) {
			stack.push(i%len)
		} else {
			while (nums[i%len] > nums[stack[stack.length-1]]) {
				oldi = stack.pop()
				res[oldi] = nums[i%len]
			}
			stack.push(i%len)
		}
	}
	return res
}
