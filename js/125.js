// https://leetcode.com/problems/valid-palindrome/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	if (!s || !s.length) {
		return true
	}
	s = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase()

	let isPalindrome = (str) => {
		let i = 0
		let res = true
		while (i <= Math.floor(str.length/2)) {
			if (str[i] !== str[str.length-1-i]) {
				res = false
				break
			}
			i++
		}
		return res
	}
	return isPalindrome(s)
};
