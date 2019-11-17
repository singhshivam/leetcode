// https://leetcode.com/problems/k-closest-points-to-origin/
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
	let distance = (pair) => {
		return pair[0]**2 + pair[1]**2
	}
	points.sort((a,b) => {
		return distance(a) - distance(b)
	})
	return points.splice(0, K)
};
