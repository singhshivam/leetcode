// https://leetcode.com/problems/binary-tree-level-order-traversal/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if (!root) {
		return []
	}
	let res = []
	let queue = [root]
	while (queue.length) {
		let levelNodes = []
		while (queue.length) {
			levelNodes.push(queue.shift())
		}
		levelNodes.forEach((node) => {
			if (node.left) {
				queue.push(node.left)
			}
			if (node.right) {
				queue.push(node.right)
			}
		})
		res.push(levelNodes.map((n) => n.val))
	}
	return res
};
