const rootA = document.getElementById('rootA')
const rootB = document.getElementById('rootB')

const nodeA = document.getElementById('nodeA')
const nodeB = document.getElementById('nodeB')

let getPathToParent = (node, root) => {
	let path = []
	while (node !== root) {
		path.unshift(Array.from(node.parentElement.children).indexOf(node))
		node = node.parentElement
	}
	return path
}

let getNodeFromPath = (root, path) => {
	let curr = root
	while (path.length) {
		curr = Array.from(curr.children)[path.shift()]
		if (!curr) {
			return false
		}
	}
	return curr
}

let path = getPathToParent(nodeA, rootA)
let nodeOfInterest = getNodeFromPath(rootB, path)

console.log(nodeOfInterest === nodeB)
