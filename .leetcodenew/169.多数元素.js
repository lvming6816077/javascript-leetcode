/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    var major = -1
    var count = 0
    for (var i = 0 ; i < nums.length ; i++) {
        if (count == 0) {
            major = nums[i]
        }
        if (major == nums[i]) {
            count++
        } else {
            count--
        }
    }

    return major
};
var majorityElement = function(nums) {
    var count = 0
    var major = -1
    for (var i = 0 ; i < nums.length ; i++) {
        if (count == 0) {
            major = nums[i]
        }
        if (major == nums[i]) {
            count++
        } else {
            count--
        }
    }

    return major
}
// @lc code=end

