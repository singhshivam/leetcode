// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	if (!nums) {
		return nums
	}
	if (!nums.length) {
		return 0
	}
	let lastseen
	let lastseenCount = 0
	let i = 0
	while (i < nums.length) {
		let num = nums[i]
		if (lastseen === undefined || lastseen !== num) {
			lastseen = num
			lastseenCount = 1
		} else {
			lastseenCount++
		}
		if (lastseenCount < 3) {
			i++
		} else {
			nums.splice(i, 1)
		}
	}
	return nums.length
};
