// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
	if (!root) {
		return root
	}
	let queue = [root]
	let bfs = (queue) => {
		if (!queue || !queue.length) {
			return
		}
		let levelNodes = [], i=0
		while (queue.length) {
			levelNodes.push(queue.shift())
			if (i>0) {
				levelNodes[i-1].next = levelNodes[i]
			}
			i++
		}
		levelNodes[levelNodes.length-1].next = null
		levelNodes.forEach((node) => {
			if (node.left) {
				queue.push(node.left)
			}
			if (node.right) {
				queue.push(node.right)
			}
		})
		bfs(queue)
	}
	bfs(queue)
	return root
};
