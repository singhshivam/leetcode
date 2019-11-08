# https://leetcode.com/problems/first-unique-character-in-a-string/
# @param {String} s
# @return {Integer}
def first_uniq_char(s)
	idx = s.size - 1 
	unq = {}
	hash = {}
	while idx >= 0 
		c = s[idx]
		if !hash[c]
			unq[c] = idx
			hash[c] = idx
		elsif unq[c]
			unq.delete(c)
		end 
		idx -= 1
	end
	unq.values.sort[0] || -1
end
