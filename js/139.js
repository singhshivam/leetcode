// https://leetcode.com/problems/word-break/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, hash={}) {
	wordDict = wordDict.sort((a,b) => b.length - a.length)
	if (s === '') {
		return true
	}
	if (hash[s] !== undefined) {
		return hash[s]
	}
	let res = false
	for (let i=0; i<wordDict.length; i++) {
		let word = wordDict[i]
		if (s.indexOf(word) === 0) {
			res = wordBreak(s.slice(word.length), wordDict, hash)
			if (res) {
				break
			}
		}
	}
	hash[s] = res
	return res
};
