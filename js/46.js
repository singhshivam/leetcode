/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, temp=[], res=[]) {
	if (!nums || nums.length === 0) {
		return [[]]
	}

	if (nums.length === temp.length) {
		res.push([...temp])
		temp = []
		return
	}

	nums.forEach((el) => {
		if (temp.indexOf(el) === -1) {
			temp.push(el)
			permute(nums, temp, res)
			temp.pop()
		}
	})
	return res
};
