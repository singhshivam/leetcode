// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	let left = [1]
	let right = [1]
	let product = 1
	nums.forEach((num) => {
		product *= num
		left.push(product)
	})
	left.pop() // last product not required
	let i = nums.length-1
	product = 1
	while (i>=0) {
		product *= nums[i]
		right.unshift(product)
		i -= 1
	}
	right.shift() // last product not required
	return left.map((l, i) => l * right[i])
};
