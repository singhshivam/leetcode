# https://leetcode.com/problems/letter-combinations-of-a-phone-number/

# @param {String} digits
# @return {String[]}
def dict
	{
		0 => [' '],
		2 => ['a','b', 'c'],
		3 => ['d', 'e', 'f'],
		4 => ['g', 'h', 'i'],
		5 => ['j', 'k', 'l'],
		6 => ['m', 'n', 'o'],
		7 => ['p', 'q', 'r', 's'],
		8 => ['t', 'u', 'v'],
		9 => ['w', 'x', 'y', 'z']
	}
end

def explore(arr, curr, i)
	return [] if arr.size.zero?

	if i == arr.size-1
		res = (arr[i] || []).map { |a|
			curr + a
		}
		return res
	else
		res = (arr[i] || []).map { |a|
			explore(arr, curr+a, i+1)
		}
		return res
	end
end

def letter_combinations(digits)
	# handle spaces *, # and 1, empty string
	puts "digits: #{digits}"
	digits = digits.chars.map(&:to_i) || []
	dictarr = digits.map { |d| dict[d] }.compact # uniq handles non standard inputs
	explore(dictarr, "", 0).flatten
end
