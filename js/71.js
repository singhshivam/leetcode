// https://leetcode.com/problems/simplify-path/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
	if (!path || !path.length) {
		return path
	}
	let arr = path.split('/')
	let root = new Dir('/')
	let curr = root
	arr.forEach((dir) => {
		if (dir === '.' || dir === "") {
			// dont do anything
		} else if (dir === "..") {
			curr = curr.parent || root
		} else {
			let idx = curr.children.map((a) => a.val).indexOf(dir)
			if (idx === -1) {
				let dirnode = new Dir(dir, curr)
				curr.children.push(dirnode)
				curr = dirnode
			} else {
				curr = curr.children[idx]
			}
		}
	})
	return curr.path()
};

class Dir {
	constructor(name, parent, children=[]) {
		this.val = name
		this.parent = parent
		this.children = children || []
	}
	path() {
		let p = [this.val]
		let node = this
		while (node.parent) {
			node = node.parent
			p.unshift(node.val)
		}
		let res = p.join('/').slice(1)
		if (!res.length) {
			res = "/"
		}
		return res
	}
}
