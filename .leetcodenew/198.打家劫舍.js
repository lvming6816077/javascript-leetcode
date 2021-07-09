/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var dp = new Array(nums.length)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])

    var res = 0
    for (var i = 2 ; i < nums.length ; i++) {
        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
        res = Math.max(dp[i],res)
    }

    return nums.length <= 2 ? Math.max(...nums) : res
};
var rob = function(nums) {
    var res = 0
    var dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    for (var i = 2 ; i < nums.length ; i++) {
        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])
        res = Math.max(res,dp[i])
    }

    return  nums.length <= 2 ? Math.max(...nums) : res
}
// @lc code=end

