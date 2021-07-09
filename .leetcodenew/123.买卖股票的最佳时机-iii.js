/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var dp = new Array(prices.length).fill('').map(d=>new Array(5).fill(0))
    dp[0][1] = -prices[0] // 第一天第一次持有股票手里的钱
    dp[0][0] = 0// 第一天第一次没有股票手里的钱
    dp[0][2] = 0// 第一天第一次没有股票手里的钱
    dp[0][4] = 0// 第一天第一次没有股票手里的钱
    dp[0][3] = -prices[0] // 第一天第二次持有股票手里的钱

    for (var i = 1 ; i < prices.length ; i++) {
        dp[i][0] = dp[i-1][0]
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
        dp[i][2] = Math.max(dp[i-1][2],dp[i-1][1]+prices[i])
        dp[i][3] = Math.max(dp[i-1][3],dp[i-1][2]-prices[i])
        dp[i][4] = Math.max(dp[i-1][4],dp[i-1][3]+prices[i])
    }

    return dp[prices.length-1][4]
};
// @lc code=end

