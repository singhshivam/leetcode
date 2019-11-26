// https://leetcode.com/problems/word-ladder/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
	let set = new Set(wordList)
	if (!set.has(endWord)) {
		return 0
	}
	let queue = [beginWord]
	if (set.has(beginWord)) {
		set.delete(beginWord)
	}
	let level=1
	while (queue.length) {
		if  (!queue.length) {
			return 0
		}
		let currWords = []
		while (queue.length) {
			currWords.push(queue.shift())
		}
		for (let idx=0; idx<currWords.length; idx++) {
			currWord = currWords[idx]
			//currWords.forEach((currWord) => {
			if (currWord === endWord) {
				//console.log(currWord)
				//console.log(level)
				//break
				return level
			}
			for (let i=0; i<currWord.length; i++) {
				for (let j='a'.charCodeAt(); j<= 'z'.charCodeAt(); j++) {
					let newWord = currWord.slice(0,i) + String.fromCharCode(j) + currWord.slice(i+1)
					if (set.has(newWord)) {
						queue.push(newWord)
						set.delete(newWord)
					}
				}
			}
		}
		level++
	}
	return 0
};
