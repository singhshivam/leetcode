# https://leetcode.com/problems/reverse-integer/
=begin
Given a 32-bit signed integer, reverse digits of an integer.
Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
=end

# @param {Integer} x
# @return {Integer}
def get_digits_in_reverse(num)
	digits = []
	while num > 0
		digits << num % 10
		num = num / 10
	end
	digits
end

def reverse(x)
	nflag = x.negative?
	ans = get_digits_in_reverse(x.abs).join.to_i
	ans *= -1 if nflag
	ans = 0 if !(-2**31...2**31).include?(ans)
	ans
end
