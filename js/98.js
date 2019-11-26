// https://leetcode.com/problems/validate-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
	if (!root) {
		return true
	}
	let curr
	let inorder = (root) => {
		if (!root) {
			return true
		}
		let isLeftValid = inorder(root.left)
		if (curr === undefined) {
			curr = root.val
		} else {
			if (curr >= root.val) {
				return false
			} else {
				curr = root.val
			}
		}
		let isRightValid = inorder(root.right)
		return isLeftValid && isRightValid
	}
	return inorder(root)
};
