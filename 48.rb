# https://leetcode.com/problems/rotate-image/
#
# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.

def swap(matrix, i, j, k, l)
	temp = matrix[k][l]
	matrix[k][l] = matrix[i][j]
	matrix[i][j] = temp
end

def rotate(matrix)
	return [] if matrix.empty?
	low = 0
	high = matrix.size - 1
	while low < high
		index = 0
		while index < high - low
			swap(matrix, low, low+index,  low+index,   high)
			swap(matrix, low, low+index,  high,        high-index)
			swap(matrix, low, low+index,  high-index,  low)
			index += 1
		end
		low += 1
		high -= 1
	end
	matrix
end
