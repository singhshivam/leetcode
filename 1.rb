# https://leetcode.com/problems/two-sum/


# O(n)
def two_sum(nums, target)
	res = []
	hash = {}
	nums.each_with_index { |num, i|
		missing = target - num
		if hash[missing]
			res << i << hash[missing]
		else
			hash[num] = i
		end
	}
	res
end

# O(n2)
def two_sum(nums, target)
	sum = []
	nums.each_with_index { |num1, i|
		nums.each_with_index { |num2, j|
			next if i == j

			sum << i << j if num1 + num2 == target
		}
	}
	sum.uniq
end
