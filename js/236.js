// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	if (!root) {
		return null
	}
	let lca = (node) => {
		if (!node) {
			return false
		}

		let left = lca(node.left)
		let right = lca(node.right)
		let res = false
		if (node.val === p.val || node.val === q.val) {
			res = true
		}
		if ((left && right) || (res && (left || right))) {
			return node
		}
		if (left) {
			return left
		} else if (right) {
			return right
		}
		if (res && (left || right)) {
			return node
		}
		return res
	}  
	return lca(root)
};
