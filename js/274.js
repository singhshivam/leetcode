// https://leetcode.com/problems/h-index/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
	if (!citations || !citations.length) {
		return 0
	}
	citations.sort((a,b) => { return b-a })
	let hindex = 0
	for(let i=0; i < citations.length; i++) {
		let h = i+1
		if (citations[i] < h) {
			break
		} else {
			hindex = h
		}
	}
	return hindex
};
