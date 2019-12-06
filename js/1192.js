// https://leetcode.com/problems/critical-connections-in-a-network/
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
	if (!connections || !connections.length) {
		return connections || []
	}
	let adjMat = Object.create(null)
	connections.forEach((conn) => {
		adjMat[conn[0]] = adjMat[conn[0]] || []
		adjMat[conn[1]] = adjMat[conn[1]] || []
		adjMat[conn[0]].push(conn[1])
		adjMat[conn[1]].push(conn[0])
	})
	let hash = Object.create(null)
	let visited = new Set()
	let dfs = (node) => {
		if (visited.has(node)) {
			return
		} else {
			visited.add(node)
		}
		adjMat[node].forEach((n) => {
			if (!visited.has(n)) {
				hash[n] = hash[n] || new Set()
				hash[n].add(node)
				dfs(n)
			}
		})
		visited.delete(node)
	}
	dfs(connections[0][0])
	let res = []
	Object.keys(hash).forEach((k) => {
		if (hash[k].size < 2) {
			res.push([parseInt(k), Array.from(hash[k])[0]])
		}
	})
	return res
};
