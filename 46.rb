# https://leetcode.com/problems/permutations/
# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums, tmp=[], res=[])
	return [] if !nums || nums.empty?

	if tmp.size == nums.size
		res << tmp.dup
		return
	end

	nums.each { |num|
		if !tmp.include?(num)
			tmp << num
			permute(nums, tmp, res)
			tmp.pop
		end
	}
	res
end
