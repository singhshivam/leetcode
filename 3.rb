# https://leetcode.com/problems/longest-substring-without-repeating-characters/
=begin
Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
						 Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
=end

# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
	if s.length == 1
		return 1
	else
		char_arr = s.chars
		res = 0
		char_arr.each_with_index { |posit, i|
			arr = []
			arr << posit
			char_arr[i+1..-1].each { |char|
				if arr.include?(char)
					res = [res, arr.length].max
					break
				else
					arr << char
				end
			}
			res = [res, arr.length].max
		}
		res
	end
end
