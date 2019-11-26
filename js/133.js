// https://leetcode.com/problems/clone-graph/
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
	if (!node) {
		return node
	}

	let queue = [node]
	let hash = Object.create(null)
	let visited = new Set()

	let bfs = (queue) => {
		let curr = queue.shift()
		if (!curr) { // empty queue
			return
		}
		if (!visited.has(curr.val)) {
			let clone = hash[curr.val] || new Node(curr.val, [])
			if (!hash[curr.val]) {
				hash[curr.val] = clone
			}
			curr.neighbors.forEach((n) => {
				if (!visited.has(n.val)) {
					queue.push(n)
				}
				let cn = hash[n.val] || new Node(n.val, [])
				if (!hash[n.val]) {
					hash[n.val] = cn
				}
				clone.neighbors.push(cn)
			})
		}
		visited.add(curr.val)
		bfs(queue)
	}
	bfs(queue)
	//console.log(hash[node.val])
	return hash[node.val]
};
