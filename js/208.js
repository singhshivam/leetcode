// https://leetcode.com/problems/implement-trie-prefix-tree/
/**
 * Initialize your data structure here.
 */
var Trie = function(isEnd=false) {
	this.chars = {}
	this.isEnd = isEnd
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
	let chars = word.split('')
	let node = this
	chars.forEach((char, i) => {
		let isEnd = i === chars.length-1
		if (node.chars[char]) {
			node = node.chars[char]
			if (isEnd) {
				node.isEnd = isEnd
			}
		} else {
			node.chars[char] = new Trie(isEnd)
			node = node.chars[char]
		}
	})
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
	if (!word || !word.length) {
		return false
	}
	let res = false
	let node = this
	let chars = word.split('')
	for (let i=0; i<chars.length; i++) {
		let isEnd = i === chars.length-1
		if (node.chars[chars[i]]) {
			node = node.chars[chars[i]]
			if (isEnd && node.isEnd) {
				res = true
			}
		} else {
			break
		}
	}
	return res
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
	if (!prefix) {
		return false
	} else if (prefix === '') {
		return true
	}
	let res = false
	let node = this
	let chars = prefix.split('')
	for (let i=0; i<chars.length; i++) {
		let isEnd = i === chars.length-1
		if (node.chars[chars[i]]) {
			node = node.chars[chars[i]]
			if (isEnd) {
				res = true
			}
		} else {
			break
		}
	}
	return res

};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
