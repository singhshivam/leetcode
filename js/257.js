// https://leetcode.com/problems/binary-tree-paths/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
	if (!root) {
		return []
	}
	let dfs = (node, temp=[], paths=[]) => {
		if (!node) {
			return
		}

		temp.push(node.val)
		dfs(node.left, temp, paths)
		dfs(node.right, temp, paths)   
		if (!node.left && !node.right) {
			paths.push([...temp])
		}
		temp.pop()
		return paths
	}
	return dfs(root).map((a) => a.join('->'))
};
