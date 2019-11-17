// https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let i = 0, seen = 0
	while (seen < nums.length) {
		if (nums[i] === 0) {
			nums.splice(i,1)
			nums.push(0)
		} else {
			i += 1
		}
		seen += 1
	}
	return nums
};
