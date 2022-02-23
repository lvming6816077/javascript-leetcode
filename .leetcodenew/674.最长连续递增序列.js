/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    var start = [nums[0]]
    
    var res = 0
    for(var i = 0 ; i < nums.length ; i++) {
        if (nums[i] > start[start.length-1]) {
            start.push(nums[i])
        } else {
            start = [nums[i]]
        }
        res = Math.max(res,start.length)
    }

    return res
};
// @lc code=end

