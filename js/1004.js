// https://leetcode.com/problems/max-consecutive-ones-iii/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
	let left=0, right=0, res=0
	let count = K 
	if (K===0) {
		let temp = 0
		A.forEach((a) => {
			if (a === 0) {
				temp = 0
			} else {
				temp += 1
			}
			res = Math.max(res, temp)
		})
		return res
	}
	while (right < A.length) {
		if (A[right] === 1) {
			right += 1
		} else if (count > 0) {
			count -= 1
			right += 1
		} else if (A[left] == 1) {
			left +=1
		} else {
			if (count < K) {
				count += 1
			}
			left += 1
		}
		if (right-left > res) {
			res = right-left
		}
	}
	return res
};
