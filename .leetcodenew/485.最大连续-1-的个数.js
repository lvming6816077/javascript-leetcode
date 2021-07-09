/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var count = 0
    var res = 0
    for (var i = 0 ; i < nums.length ; i++) {
        if (nums[i] != 1) {
            count = 0
        } else {
            count ++
        }

        res = Math.max(res,count)

    }

    return res
};
var findMaxConsecutiveOnes = function(nums) {
    var count = 0
    var res = 0
    for (var i = 0 ; i < nums.length ; i++) {
        if (nums[i] == 0) {
            count = 0
        } else {
            count++
        }
        res = Math.max(res,count)
    }

    return res
}
// @lc code=end

