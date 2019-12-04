// https://leetcode.com/problems/add-binary/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let idx = 0, carry = 0, res=""
	let add = (sum) => {  
		if (sum === 2) {
			res = "0" + res
			carry = 1
		} else if (sum === 3) {
			res = "1" + res
			carry = 1
		} else {
			res = String(sum) + res
			carry = 0
		}
	}
	while (idx < a.length && idx < b.length) {
		let num1 = parseInt(a[a.length-1-idx])
		let num2 = parseInt(b[b.length-1-idx])
		let sum = num1 + num2 + carry
		add(sum)
		idx++
	}
	while (idx < a.length) {
		let sum = parseInt(a[a.length-1-idx]) + carry
		add(sum)
		idx++
	}
	while (idx < b.length) {
		let sum = parseInt(b[b.length-1-idx]) + carry
		add(sum)
		idx++
	}
	if (carry) {
		res = "1" + res
	}
	return res
};
