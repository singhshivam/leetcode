// https://leetcode.com/problems/minimum-size-subarray-sum/
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
	if (!s || !nums.length) {
		return 0
	} else if (nums.length === 1) {
		if (nums[0] === s) {
			return 1
		} else {
			return 0
		}
	}
	let i=0, j=1, res=Number.MAX_SAFE_INTEGER
	let sum = nums[i]+nums[j]
	while (i<nums.length && j<nums.length) {
		if (nums[i] >= s || nums[j] >= s) {
			res = 1
			break
		}

		if (sum >= s) {
			res = Math.min(res, j-i+1)
			sum -= nums[i]
			i += 1
		} else {
			j += 1
			sum += nums[j]
		}
	}
	if (res === Number.MAX_SAFE_INTEGER) {
		return 0
	} else {
		return res
	}
};
