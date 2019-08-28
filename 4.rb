# https://leetcode.com/problems/median-of-two-sorted-arrays/
=begin
There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.
Example 1:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
=end

# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
	arr = []
	total_elements = nums1.length + nums2.length
	i1, i2 = 0, 0
	while arr.length < total_elements
		if !nums1[i1]
			arr << nums2[i2]
			i2 += 1
		elsif !nums2[i2]
			arr << nums1[i1]
			i1 += 1
		elsif nums1[i1] < nums2[i2] # look for boundary
			arr << nums1[i1]
			i1 += 1
		else
			arr << nums2[i2]
			i2 += 1
		end
	end
	mid = arr.size/2
	arr.size.even? ? (arr[mid] + arr[mid-1]).to_f / 2 : arr[mid]
end
