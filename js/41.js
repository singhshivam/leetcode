// https://leetcode.com/problems/first-missing-positive/
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	if (!nums || !nums.length) {
		return 1
	}
	let set = new Set([...Array(nums.length+2).keys()])
	set.delete(0)
	nums.forEach((num) => {
		set.delete(num)
	})
	return Array.from(set)[0]
};
