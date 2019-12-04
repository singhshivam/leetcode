// https://leetcode.com/problems/sort-colors/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	if (!nums || !nums.length) {
		return nums
	}    
	let swap = (left, right) => {
		let temp = nums[left]
		nums[left] = nums[right]
		nums[right] = temp
	}
	let left = 0, zero = 0, right=nums.length-1
	while (left <= right) {
		if (nums[left] === 2) {
			swap(left, right)
			right--
		} else if (nums[left] === 0) {
			swap(left, zero)
			zero++
			left ++
		} else if (nums[left] === 1) {
			left++
		}
	}
	return nums
};
