// https://leetcode.com/problems/sqrtx/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	if (x === 0) {
		return 0
	} else if (x === 1) {
		return 1
	} else if (x === 2 || x === 3) {
		return 1
	}
	let left = 1, right = x
	while (left <= right) {
		let mid = Math.floor((left+right)/2)
		let sqr = mid*mid
		if (sqr === x) {
			return mid
		} else if (sqr > x) {
			//left++
			right = mid-1
		} else {
			if (((mid+1)*(mid+1)) > x) {
				return mid
			}
			left = mid+1
			//right--
		}
	}
};
