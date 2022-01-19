/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    var dp = new Array(amount+1).fill(0)
    dp[0] = 1 // 总数为0时，只有一种方案兑换 就是所有硬币都不选择

    for (var i = 0 ; i < coins.length ; i++) {
        for (var j = 0 ; j <= amount ; j++) {
            if (j-coins[i]>=0) {
                dp[j] = dp[j] + dp[j-coins[i]]
            }
        }

    }
    return dp[amount]
};
// @lc code=end

