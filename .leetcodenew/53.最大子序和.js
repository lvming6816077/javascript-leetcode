/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray1 = function(nums) {
    var pre = nums[0]
    var max = nums[0]
    for (var i = 1 ; i < nums.length ; i++) {
        if (pre+nums[i] > nums[i]) {
            pre = pre + nums[i]
        } else {
            pre = nums[i]
        }
        max = Math.max(pre,max)
    }

    return max
};
var maxSubArray = function(nums) {
    var dp = new Array(nums.length).fill(-Number.MAX_SAFE_INTEGER)
    dp[0] = nums[0]
    var max = dp[0]
    for (var i = 1 ; i < nums.length ; i++) {
        dp[i] = Math.max(nums[i],Math.max(dp[i-1],0)+nums[i])
        max = Math.max(max,dp[i])
    }
    // console.log(dp)
    return max
};

var maxSubArray = function(nums) {
    var dp = new Array(nums.length).fill(-Number.MAX_SAFE_INTEGER)
    dp[0] = nums[0]
    res = nums[0]
    for (var i = 1 ; i < nums.length ; i++) {
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
        res = Math.max(dp[i],res)
    }

    return res
}

var maxSubArray = function(nums){
    var res = nums[0]
    var pre = nums[0]

    for (var i = 1 ; i <nums.length ; i++) {
        if (pre + nums[i] > nums[i]) {
            pre = pre + nums[i]
        } else {
            pre = nums[i]
        }

        res = Math.max(pre,res)
    }

    return res
}
var maxSubArray = function(nums){
    var dp = new Array(nums.length).fill(-Number.MAX_SAFE_INTEGER)
    dp[0] = nums[0]
    var res = nums[0]
    for (var i = 1 ; i<nums.length ; i++) {
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
        res = Math.max(res,dp[i])
    }

    return res
}
var maxSubArray = function(nums){
    var dp = new Array(nums.length).fill(-Number.MAX_SAFE_INTEGER)
    dp[0] = nums[0]
    var res = nums[0]
    for (var i = 1 ; i < nums.length ; i++) {
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i])
        res = Math.max(res,dp[i])
    }

    return res
}
// @lc code=end

