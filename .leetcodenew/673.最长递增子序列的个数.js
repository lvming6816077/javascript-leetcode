/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    var dp = new Array(nums.length).fill(1)
    dp[0] = 1
    dp[1] = 1
    var res = 0
    var count = new Array(nums.length).fill(1)
    for (var i = 0 ; i<nums.length ; i++) {
        for (var j = 0 ; j < i ; j++) {
            if (nums[i] > nums[j]) {
                //以nums[i]为结尾的字符串，最长递增子序列的个数为count[i]。

                //那么在nums[i] > nums[j]前提下，如果在[0, i-1]的范围内，找到了j，使得dp[j] + 1 > dp[i]，说明找到了一个更长的递增子序列。

                //那么以j为结尾的子串的最长递增子序列的个数，就是最新的以i为结尾的子串的最长递增子序列的个数，即：count[i] = count[j]。

                //在nums[i] > nums[j]前提下，如果在[0, i-1]的范围内，找到了j，使得dp[j] + 1 == dp[i]，说明找到了两个相同长度的递增子序列。

                //那么以i为结尾的子串的最长递增子序列的个数 就应该加上以j为结尾的子串的最长递增子序列的个数，即：count[i] += count[j];


                if (dp[j] + 1 > dp[i]) {
                    count[i] = count[j];
                } else if (dp[j] + 1 == dp[i]) {
                    count[i] += count[j];
                }
                dp[i] = Math.max(dp[j]+1,dp[i])

            }
            
        }
        res = Math.max(dp[i],res)

    }

    var result = 0;
    for (var i = 0; i < dp.length; i++) {
        if (res == dp[i]) result += count[i];
    }

    return result
};
// @lc code=end

