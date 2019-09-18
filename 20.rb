# https://leetcode.com/problems/valid-parentheses/
# @param {String} s
# @return {Boolean}
def is_valid(s)
	return true if s.empty?
	pairs = {
				'(' => ')',
				'{' => '}',
				'[' => ']'
	}
	stack = []
	s.chars.each { |char|
		if pairs[char]
			stack << pairs[char]
		else
			return false if char != stack.pop
		end
	}
	stack.empty?
end
