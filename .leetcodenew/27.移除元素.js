/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var j = 0
    for (var i = 0 ; i < nums.length ; i++) {
        if (nums[i] == val) {

        } else {
            nums[j] = nums[i]
            j++
        }
    }

    return j
};
var removeElement = function(nums, val) {
    var j = 0
    for (var i = 0 ; i < nums.length ; i++) {
        if (nums[i] == val) {

        } else {
            nums[j] = nums[i]
            
            j++
        }
    }

    return j
}
// @lc code=end

