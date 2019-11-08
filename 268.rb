# https://leetcode.com/problems/missing-number/
# @param {Integer[]} nums
# @return {Integer}
def missing_number(nums)
	n = nums.size
	tot_sum = (n*(n+1))/2
	tot_sum - nums.sum
end
