// https://leetcode.com/problems/h-index-ii/
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
	if (!citations || !citations.length) {
		return 0
	}
	citations.reverse()
	let hindex = 0
	for(let i=0; i< citations.length; i++) {
		let h = i+1
		if (citations[i] < h) {
			break
		} else {
			hindex = h
		}
	}
	return hindex
};
