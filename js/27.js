//https://leetcode.com/problems/remove-element/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    toIterate = nums.length
    i = 0
    while (i < toIterate) {
        num = nums[i]
        if (num == val) {
            let index = nums.indexOf(num);
            nums.splice(index, 1);
        } else {
            i += 1
        }
        toIterate = nums.length
    }
    return nums.length
};
