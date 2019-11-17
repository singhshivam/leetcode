// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
	if (!root) {
		return '[]'
	}

	let arr = [], queue = []
	queue.push(root)
	while (queue.length) {
		let node = queue.shift()
		arr.push(node === null ? null : node.val) // handle for 0
		if (node) {
			queue.push(node.left)
			queue.push(node.right)
		}
	}
	//console.log(arr)
	return JSON.stringify(arr)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
	console.log(data)
	let arr = JSON.parse(data)
	if (!arr || !arr.length) {
		return null
	}

	let queue = []
	let root = new TreeNode(arr.shift())
	queue.push(root)
	while (queue.length) {
		let left = arr.shift()
		let right = arr.shift()
		let node = queue.shift()
		node.left = left === null ? null : new TreeNode(left)
		node.right = right === null ? null : new TreeNode(right)
		if (node.left) {
			queue.push(node.left)
		}
		if (node.right) {
			queue.push(node.right)
		}
	}
	return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
