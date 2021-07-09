/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (prices.length == 0) return 0
    var dp = new Array(prices.length).fill('').map(d=>new Array(k*2+1).fill(0))

    


    for (var i = 0 ; i < prices.length ; i++) {
        if (i == 0) {
            dp[0][0] = 0// 第一天第一次没有股票手里的钱
            for (var m = 0 ; m < k*2 ;m=m+2) {
                dp[i][m+1] = -prices[0]// 第一天第k次持有股票手里的钱
            }
            continue
        }
        for (var j = 0 ; j < k*2 ;j=j+2) {
            dp[i][0] = dp[i-1][0]
            dp[i][j+1] = Math.max(dp[i-1][j+1],dp[i-1][j]-prices[i])
            dp[i][j+2] = Math.max(dp[i-1][j+2],dp[i-1][j+1]+prices[i])
        }

    }

    return dp[prices.length-1][k*2]
};
// @lc code=end

