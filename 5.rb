# https://leetcode.com/problems/longest-palindromic-substring/
=begin
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:
Input: "cbbd"
Output: "bb"
=end

# @param {String} s
# @return {String}
def longest_palindrome(s)
	pals = ""
	c_arr = s.chars
	c_arr.each_with_index { |char, i|
		if i == 0
			if char == c_arr[1]
				pals = "#{char}#{char}"
			else
				pals = char
			end
		else
			a = 0
			if (c_arr[i-1] == c_arr[i+1])
				while i-a >= 0 && c_arr[i+a] && c_arr[i-a] == c_arr[i+a] # -1 can be an issue
					a += 1
				end
				pals = c_arr[(i-a+1)..(i+a-1)].join if (pals.size < 2*a-1)
			end
			a = 0
			if (c_arr[i] == c_arr[i+1])
				while i-a >= 0 && c_arr[i+a+1] && c_arr[i-a] == c_arr[i+a+1]
					a += 1
				end
				pals = c_arr[(i-a+1)..(i+a)].join if (pals.size < 2*a)
			end
		end
	}
	pals
end

