/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var dpMax = new Array(nums.length+1).fill(-Number.MAX_SAFE_INTEGER)
    var dpMin = new Array(nums.length+1).fill(Number.MAX_SAFE_INTEGER)
    dpMax[0] = nums[0]
    dpMin[0] = nums[0]
    var res = nums[0]
    for (var i = 1 ; i < nums.length ; i++) {
        if (nums[i] >= 0) {
            dpMax[i] = Math.max(dpMax[i-1]*nums[i],nums[i])
            dpMin[i] = Math.min(dpMin[i-1]*nums[i],nums[i])
        } else {
            dpMax[i] = Math.max(dpMin[i-1]*nums[i],nums[i])
            dpMin[i] = Math.min(dpMax[i-1]*nums[i],nums[i])
        }
        
        res = Math.max(res,dpMax[i])
    }

    return res
};
// @lc code=end

