# https://leetcode.com/problems/contains-duplicate/

# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
	set = Set.new
	res = false
	nums.each { |n|
		if set.include?(n)
			res = true
			break
		else
			set << n
		end
	}
	res
end
