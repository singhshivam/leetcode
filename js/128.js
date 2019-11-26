// https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
	if (!nums || !nums.length) {
		return 0
	}
	let hash = Object.create(null)
	nums.forEach((n,i) => {
		hash[n] = i
	})
	let max = 0
	let i = 0
	let visited = new Set()
	while (i < nums.length) {
		if (!visited.has(i)) {
			let j = i
			while (hash[nums[j]-1] !== undefined) {
				j = hash[nums[j]-1]
			}
			let count = 1
			visited.add(j)
			while(hash[nums[j]+1] !== undefined) {
				j = hash[nums[j]+1]
				count++
				visited.add(j)
			}
			if (count > max) {
				max = count
			}
		}
		i++
	}
	return max
};
