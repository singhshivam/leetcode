// https://leetcode.com/problems/increasing-triplet-subsequence/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
	if (!nums || !nums.length) {
		return false
	}

	let minofAll = Number.MAX_SAFE_INTEGER
	let minSecond = Number.MAX_SAFE_INTEGER
	let res = false
	for(let i=0; i<nums.length; i++) {
		let num = nums[i]
		if (num <= minofAll) {
			minofAll = num
		} else if (num <= minSecond) {
			minSecond = num
		} else {
			res = true // there are atleast two values less that this
			break
		}
	}
	return res
};
