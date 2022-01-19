/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var dp = new Array(nums.length+1).fill(1)
    // dp[0] = 1
    // dp[1] = 1
    var res = 0
    for (var i = 0 ; i < nums.length ; i++) {
        for (var j = 0 ; j < i ; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
            
        }
        res = Math.max(dp[i],res)
    }
    console.log(dp)
    return res
};
var lengthOfLIS = function(nums) {
    var dp = new Array(nums.length).fill(1)
    var res = 0
    for (var i = 0 ; i < nums.length ; i++) {
        for (var j = 0 ; j < i ; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
            res = Math.max(dp[i],res)
        }
        
    }

    return res
}
var lengthOfLIS = function(nums) {
    if (nums.length == 1) return 1
    var dp = new Array(nums.length).fill(1)
    var res = 0
    for (var i = 0; i < nums.length ; i++) {
        for (var j = 0 ; j < i ; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j]+1,dp[i])
            }
            res = Math.max(res,dp[i])
        }
    }


    return res
    
}
var lengthOfLIS = function(nums) {
    if (nums.length == 1) return 1
    var dp = new Array(nums.length).fill(1)
    var res = 0

    for (var i = 0 ; i < nums.length ; i++) {
        for (var j = 0 ; j < i ; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i],dp[j]+1)
            }

            res = Math.max(res,dp[i])
        }
    }
    return res
}
// @lc code=end

