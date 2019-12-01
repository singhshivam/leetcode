// https://leetcode.com/problems/word-search/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
	if (!word || !word.length) {
		return false
	}

	let explore = (i,j,k,visited=new Set) => {
		if (i<0 || i >= board.length || j<0 || j>=board[i].length) {
			return false
		}
		if (k === word.length-1) {
			return true
		}
		visited.add(`${i}:${j}`)
		let res = false
		if (board[i] && board[i][j+1] === word[k+1] && !visited.has(`${i}:${j+1}`)) {
			res = explore(i,j+1,k+1, visited)
		}
		if (!res && board[i+1] && board[i+1][j] === word[k+1] && !visited.has(`${i+1}:${j}`)) {
			res = explore(i+1,j,k+1, visited)
		}
		if (!res && board[i] && board[i][j-1] === word[k+1] && !visited.has(`${i}:${j-1}`)) {
			res = explore(i,j-1,k+1,visited)
		}
		if (!res && board[i-1] && board[i-1][j] === word[k+1] && !visited.has(`${i-1}:${j}`)) {
			res = explore(i-1,j,k+1,visited)
		}
		visited.delete(`${i}:${j}`)
		return res
	}
	let res = false
	for (let i=0; i<board.length; i++) {
		for (let j=0; j<board[i].length; j++) {
			if (board[i][j] === word[0]) {
				res = explore(i,j,0)
				if (res) {
					return res
				}
			}
		}
	}
	return res
};
