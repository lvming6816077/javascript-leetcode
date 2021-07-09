/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {}
    for (var i = 0 ; i < nums.length ; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        } else {
            map[nums[i]]++
        }
    }

    for (var key in map) {
        if (map[key] == 1) {
            return key
        }
    }

    return null
};
var singleNumber = function(nums) {
    var su = nums[0]
    for (var i = 1 ; i < nums.length ; i++) {
        su = su ^ nums[i]
    }

    return su
};
// @lc code=end

