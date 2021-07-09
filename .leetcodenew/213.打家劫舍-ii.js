/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob1 = function(nums) {

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
    if (nums.length <= 2) return Math.max(...nums)
    var len = nums.length
    var one = rob1(nums.slice(0,len-1))
    var two = rob1(nums.slice(1,len))
    // console.log(one,two)
    return Math.max(one,two)
}
// @lc code=end

