# https://leetcode.com/problems/zigzag-conversion/
=begin
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);
Example 1:
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
=end

# @param {String} s
# @param {Integer} num_rows
# @return {String}
def convert(s, num_rows)
	return s if num_rows == 1

	index = num_rows - 2
	arr = []
	b_arr = []
	c_count = 0
	s.chars.each_with_index { |char, i|
		if c_count < num_rows
			arr << char
			c_count += 1
			if c_count == num_rows
				b_arr << arr
				arr = []
			end
		elsif index == 0
			b_arr << arr
			arr = []
			arr << char
			c_count = 1
			index = num_rows - 2
		else
			arr[index] = char
			index -= 1
		end
	}
	b_arr << arr if arr.size > 0

	# read the array now
	res = ""
	num_rows.times { |i|
		res += b_arr.map { |a| a[i] }.compact.join
	}
	res
end
