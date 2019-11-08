# https://leetcode.com/problems/validate-binary-search-tree/
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Boolean}
def inorder(node, res=[])
	return if !node

	inorder(node.left, res)
	res << node.val
	inorder(node.right, res)
	res
end

def is_valid_bst(root)
	return true if !root

	res = inorder(root)
	res.compact!
	res == res.uniq.sort
end
