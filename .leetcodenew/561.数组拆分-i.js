/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>a-b)
    var res = 0
    for (var i = 0 ; i < nums.length ; i=i+2) {
        res = res + nums[i]
    }

    return res
};
// @lc code=end

