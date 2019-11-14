// https://leetcode.com/problems/decode-ways/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
	if (!s || s.charAt(0) === '0') { // if it starts with 0, it has no solutions
		return 0
	}

	const length = s.length
	let count = 0

	let backtrack = (start=0) => {
		if (start >= length) {
			count += 1
			return
		}
		let firstChar = s.charAt(start)
		if (parseInt(firstChar)) { // to handle 0
			backtrack(start+1)
			if (start < length-1) {
				let combinedChar = firstChar + s.charAt(start+1)
				if (parseInt(combinedChar) <= 26) {
					backtrack(start+2)
				}
			}
		}
	}

	backtrack()
	return count
};
