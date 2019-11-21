// https://leetcode.com/problems/house-robber/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	if (!nums || !nums.length) {
		return 0
	} else if (nums.length === 1) {
		return nums[0]
	} else if (nums.lenght === 2) {
		return Math.max(...nums)
	}
	let dp = []
	dp[0] = nums[0]
	dp[1] = Math.max(nums[0], nums[1])
	for (let i=2; i< nums.length; i++) {
		// take the best since prev or compute prev-1 + curr
		dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1])
	}
	return dp[dp.length-1]
};
