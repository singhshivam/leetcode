// https://leetcode.com/problems/powx-n/
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	if (n===0 || x === 1) {
		return 1
	} else if (x === 0) {
		return 0
	}
	let pow = (num, exp) => {
		if (exp === 0) {
			return 1
		} else if (exp%2 === 0) { // even
			let temp = pow(num, exp/2)
			return temp*temp
		} else { // odd
			return num * pow(num, exp-1)
		}
	}
	let res =  pow(x,Math.abs(n))
	return n > 0 ? res : 1/res
};
