# https://leetcode.com/problems/3sum-closest/
# Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
	if nums.size < 3
		return nums.reduce(&:+) || 0
	else
		res = []
		nums = nums.sort
		nums.each_with_index { |_num, i|
			break if i > nums.size-3
			j = i+1
			k = nums.size-1
			while j < k
				sum = nums[i] + nums[j] + nums[k]
				dis = (sum - target).abs
				res[dis] = sum
				sum < target ? j+=1 : k-=1
			end
		}
		return res.compact.first
	end
end
