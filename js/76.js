// https://leetcode.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
	if (!t.length || t.length > s.length) {
		return ''
	} else if (t.length === 1) {
		if (s.indexOf(t) === -1) {
			return ''
		} else {
			return t
		}
	}

	let left=0, right=-1
	let res = ''
	let map = Object.create(null)
	t.split('').forEach((char) => {
		map[char] = map[char] || 0
		map[char] += 1
	})
	let count = Object.keys(map).length
	while (right < s.length) {
		if (count === 0) {
			if (!res.length || res.length > right-left+1) {
				res = s.substring(left, right+1)
			}
			if (map[s[left]] !== undefined) {
				map[s[left]] += 1
			}
			if (map[s[left]] > 0) {
				count += 1
			}
			left += 1
		} else {
			right += 1
			if (map[s[right]] !== undefined) {
				// count might go -ve if you have
				//seen a char more than once b/w seeing other
				map[s[right]] -= 1
			}
			if (map[s[right]] === 0) {
				count -= 1
			}
		}
	}
	return res
};
