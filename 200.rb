# https://leetcode.com/problems/number-of-islands/
# @param {Character[][]} grid
# @return {Integer}
def num_islands(grid)
	islands = 0
	grid.each_with_index { |arr, i|
		arr.each_with_index { |el, j|
			if el == "1"
				islands += dfs(grid, i, j)
			end
		}
	}
	islands
end 

def dfs(grid, i, j)
	if i < 0 || i >= grid.size || j < 0 || j >= grid[i].size || grid[i][j] == "0"
		return 0
	end

	grid[i][j] = "0"
	dfs(grid, i-1, j)
	dfs(grid, i+1, j)
	dfs(grid, i, j-1)
	dfs(grid, i, j+1)
	1
end
