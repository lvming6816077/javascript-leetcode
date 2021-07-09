/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    var dp = new Array(amount+1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0
    for (var i = 1 ; i <= amount ; i++) {
        for (var j = 0 ; j < coins.length ; j++) {
            if (i >= coins[j]) {
                dp[i] = Math.min(dp[i],dp[i-coins[j]]+1)
            }
            
        }
    }
    return dp[amount] == Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
};
// @lc code=end

