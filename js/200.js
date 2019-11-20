// https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	if (!grid || !grid.length) {
		return 0
	}

	let islands = 0
	let dfs = (i,j) => {
		if (i<0 || j<0 || i>=grid.length || j >= grid[i].length || grid[i][j] === "0") {
			return 0
		}

		grid[i][j] = "0"
		dfs(i-1, j)
		dfs(i,   j+1)
		dfs(i+1, j)
		dfs(i,   j-1)
		return 1
	}
	for (let i=0; i<grid.length; i++) {
		for (let j=0; j<grid[i].length; j++) {
			if (grid[i][j] === "1") {
				islands += dfs(i,j)
			}
		}
	}
	return islands
};
