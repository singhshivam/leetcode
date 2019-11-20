// https://leetcode.com/problems/excel-sheet-column-title/
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
	if (!n) {
		return ''
	}

	let res = []
	while (n) {
		let i = n%26
		if (i === 0) {
			i = 26
			n -= 1
		}
		res.unshift('A'.charCodeAt() + i -1)
		n = Math.floor(n/26)
	}
	return String.fromCharCode(...res)
};
