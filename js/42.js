// https://leetcode.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	if (!height || height.length < 3) {
		return 0
	}
	let rightMax = [-1]
	let right = height.length-2
	while (right >= 0) {
		rightMax.unshift(Math.max(height[right+1], rightMax[0]))
		right -= 1
	}
	console.log(rightMax.length)
	let leftMax = 0
	let water = 0
	for (let i=1; i<height.length; i++) {
		leftMax = Math.max(leftMax, height[i-1])
		let res = Math.min(leftMax, rightMax[i]) - height[i]
		if (res > 0) {
			water += res
		}
	}
	return water
};
