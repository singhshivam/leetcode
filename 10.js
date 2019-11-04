// https://leetcode.com/problems/regular-expression-matching/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
	let matrix = [[]]
	s = "#"+s
	p = "#"+p 
	for(let i=0; i< s.length; i++) {
		for(let j=0; j<p.length; j++) {
			matrix[i] = matrix[i] || Array(p.lenght) 
			if (i == 0 && j == 0) {
				matrix[0][0] = true
			} else if (j == 0) {
				matrix[i][j] = false
			} else if (s[i] == p[j] || p[j] == ".") {
				if ((i-1) >= 0 && (j-1) >= 0) {
					matrix[i][j] = matrix[i-1][j-1]
				} else {
					matrix[i][j] = false
				}
			} else if (p[j] == "*") {
				if (matrix[i][j-2]) {
					matrix[i][j] = true
				} else if (s[i] == p[j-1] || p[j-1] == ".") {
					if ((i-1) >= 0 && (j-1) >= 0) {
						matrix[i][j] = matrix[i-1][j]
					} else {
						matrix[i][j] = false
					}
				} else {
					matrix[i][j] = false
				}
			} else {
				matrix[i][j] = false
			}
		}
	}
	return matrix[s.length-1][p.length-1]
};
