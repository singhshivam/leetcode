# https://leetcode.com/problems/binary-search-tree-iterator/
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

class BSTIterator

=begin
		:type root: TreeNode
=end
	def initialize(root)
		@index = -1
		@array = inorder(root) || []
	end

	def inorder(node, res=[])
		return if !node

		inorder(node.left, res)
		res << node.val
		inorder(node.right, res)
		res
	end


=begin
		@return the next smallest number
		:rtype: Integer
=end
	def next()
		@index += 1
		@array[@index]
	end


=begin
		@return whether we have a next smallest number
		:rtype: Boolean
=end
	def has_next()
		@index+1 < @array.size
	end


end

# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator.new(root)
# param_1 = obj.next()
# param_2 = obj.has_next()
