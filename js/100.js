// https://leetcode.com/problems/same-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
	if (!p && !q) {
		return true
	}
	let serialize = (queue) => {
		let res = []
		while (queue.length) {
			if (!queue.length) {
				return
			}
			let nodes = []
			while (queue.length) {
				nodes.push(queue.shift())
			}
			nodes.forEach((node) => {
				if (node) {
					res.push(node.val)
					queue.push(node.left)
					queue.push(node.right)
				} else {
					res.push(null)
				}
			})
		}
		return res
	}
	return JSON.stringify(serialize([p])) === JSON.stringify(serialize([q]))
};
