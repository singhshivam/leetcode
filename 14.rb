# https://leetcode.com/problems/longest-common-prefix/
# Write a function to find the longest common prefix string amongst an array of strings.
# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
	maxi = strs.map(&:size).min || 0
	i = 0
	res = ""
	while i<maxi
		c = nil
		strs.each { |s|
			c ||= s[i]
			if c != s[i]
				c = nil
				break
			end
		}
		if !c
			break
		else
			i += 1
			res += c
		end
	end
	res
end
