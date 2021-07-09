/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
    var dp = new Array(prices.length).fill('').map(d=>new Array(2).fill(0))
    dp[0][1] = -prices[0] // 第一天持有股票手里的钱
    dp[0][0] = 0 // 第一天没有股票手里的钱

    for (var i = 1 ; i < prices.length ; i++) {
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i])
    }

    return dp[prices.length-1][0]
}
var maxProfit = function(prices) {
    var result = 0
    for (var i = 1 ; i < prices.length ; i++) {
        result = result + Math.max(0,prices[i]-prices[i-1])
    }

    return result
}
// @lc code=end

