# https://leetcode.com/problems/3sum/
# Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

# @param {Integer[]} nums
# @return {Integer[][]}
def three_sum(nums)
	res = []
	sorted = nums.sort
	sorted.each_with_index { |n, i|
		break if n > 0
		j = i+1
		k = nums.size - 1
		while j < k
			sum = n + sorted[j] + sorted[k]
			if sum == 0
				res << [n, sorted[j], sorted[k]]
				k -= 1
				j += 1
			elsif sum > 0
				k -= 1
			else
				j += 1
			end
		end
	}
	res.uniq
end

