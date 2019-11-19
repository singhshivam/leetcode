// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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
	let lca = (node) => {
		if (!node) {
			return -1
		}
		if (p.val<node.val && q.val<node.val) {
			return lca(node.left)
		} else if (p.val>node.val && q.val>node.val) {
			return lca(node.right)
		} else {
			return node
		}
	}
	return lca(root)
};
