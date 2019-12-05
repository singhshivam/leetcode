// https://leetcode.com/problems/merge-intervals/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	if (!intervals || !intervals.length) {
		return intervals || []
	}
	intervals = intervals.sort((a,b) => a[0] - b[0])
	let i = 0
	let res = []
	while (i<intervals.length) {
		if (i === 0) {
			res.push(intervals[i])
		} else {
			if (res[res.length-1][1] >= intervals[i][0]) {
				res[res.length-1][1] = Math.max(intervals[i][1], res[res.length-1][1])
			} else {
				res.push(intervals[i])
			}
		}
		i++
	}
	return res
};
