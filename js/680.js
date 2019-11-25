// https://leetcode.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
	if (!s || !s.length) {
		return true
	}

	let isPalindrome = (str) => {
		let i = 0
		let res = true
		while (i <= Math.floor(str.length/2)) {
			if (str[i] !== str[str.length-i-1]) {
				res = false
				break
			}
			i++
		}
		return res
	}

	if (isPalindrome(s)) {
		return true
	} else {
		let left = 0
		let right = s.length-1
		while (left < right) {
			if (s[left] !== s[right]) {
				return (isPalindrome(s.slice(0,left) + s.slice(left+1)) ||
					isPalindrome(s.slice(0,right) + s.slice(right+1)))
			}
			left++
			right--
		}
	}
	return false
};
