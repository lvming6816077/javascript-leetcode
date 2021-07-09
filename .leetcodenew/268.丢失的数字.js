/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var len = nums.length

    for (var i = 0 ; i <= len ; i++) {
        if (nums.indexOf(i) == -1) {
            return i
        }
    }

    return 0
};
// @lc code=end

