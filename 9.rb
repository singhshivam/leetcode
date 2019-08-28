# https://leetcode.com/problems/palindrome-number/
=begin
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:
Coud you solve it without converting the integer to a string?
=end

# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
	return false if x.negative?
	arr = []
	while x > 0
		arr << x % 10
		x /= 10
	end
	ib, ie = 0, arr.size-1
	while ib < ie
		return false if arr[ib] != arr[ie]
		ib += 1
		ie -= 1
	end
	true
end
