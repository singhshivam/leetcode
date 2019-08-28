# https://leetcode.com/problems/two-sum/

=begin
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
=end

def two_sum(nums, target)
	nums.each_with_index { |num, i|
		nums[i+1..-1].each_with_index { |n2, i2|
			if (num + n2 == target)
				return [i, i+i2+1]
			end
		}
	}
end
