/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

var maxProfit = function(prices,fee) {
    var dp = new Array(prices.length).fill('').map(d=>new Array(2).fill(0))
    dp[0][1] = -prices[0] // 第一天持有股票手里的钱
    dp[0][0] = 0 // 第一天没有股票手里的钱
    // 只在卖出收一次服务费
    for (var i = 1 ; i < prices.length ; i++) {
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i]-fee)
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
    }

    return dp[prices.length-1][0]
}
// @lc code=end

