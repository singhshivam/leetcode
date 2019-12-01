// https://leetcode.com/problems/two-sum/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	if (!nums || !nums.length) {
		return []
	} else if (nums.length === 1 && nums[0] === target) {
		return [0]
	} else if (nums.length === 2) {
		if (nums[0] + nums[1] === target) {
			return [0,1]
		} else {
			return []
		}
	}
	let i = 0, hash = {}
	while (i<nums.length) {
		if (hash[nums[i]] !== undefined) {
			return [hash[nums[i]], i]
		} else {
			hash[target-nums[i]] = i
		}
		i++
	}
};
