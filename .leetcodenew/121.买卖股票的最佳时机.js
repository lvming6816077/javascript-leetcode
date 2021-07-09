/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
    var min = Number.MAX_SAFE_INTEGER
    var result = 0
    for (var i = 0 ; i < prices.length ; i++) {
        min = Math.min(min,prices[i])
        result = Math.max(result, prices[i] - min)
    }

    return result
};
var maxProfit = function(prices) {
    var dp = new Array(prices.length).fill('').map(d=>new Array(2).fill(0))
    
    dp[0][1] = -prices[0]
    dp[0][0] = 0

    for (var i = 1 ; i < prices.length ; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1],  -prices[i])
    }

    console.log(dp)
    return dp[prices.length-1][0]
};


var maxProfit = function(prices) {
    var min = Number.MAX_SAFE_INTEGER
    var result = 0
    for (var i = 0 ; i < prices.length ; i++) {
        min = Math.min(min,prices[i])
        result = Math.max(result,prices[i]-min)
    }

    return result
}

var maxProfit = function(prices) {
    var dp = new Array(prices.length).fill('').map(d=>new Array(2).fill(0))
    dp[0][1] = -prices[0]
    dp[0][0] = 0
    for (var i = 1 ; i < prices.length ; i++) {
        dp[i][1] = Math.max(dp[i-1][1],-prices[i])
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1]+prices[i])
    }


    return dp[prices.length-1][0]
}
// @lc code=end

