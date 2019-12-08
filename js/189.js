// https://leetcode.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	if (!nums || !nums.length) {
		return []
	}
	k = k % nums.length
	if (k === 0) {
		return nums
	}
	let reverse = (arr, left, right) => {
		let mid = Math.floor((left+right)/2)
		let i = 0
		//console.log("orig", arr)
		while (left+i<=mid) {
			let temp = arr[right-i]
			arr[right-i] = arr[left+i]
			arr[left+i] = temp
			i++
		}
		//console.log('rr:', arr)
		return arr
	}
	reverse(nums, 0, nums.length-1)
	reverse(nums, 0, k-1)
	reverse(nums, k, nums.length-1)
	return nums
};
