/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    var dp = new Array(n+1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0
    for (var i = 1 ; i <= n ; i++) {
        for (var j = 1 ; j *j <= i ; j++) {
            if (i-j*j >=0) {
                dp[i] = Math.min(dp[i],dp[i-j*j]+1)
            }
            
        }
    }
    return dp[n]
};
var numSquares = function(n) {
    // 完全背包
    var dp = new Array(n+1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0
    for (var i = 1 ; i*i <= n ;i++) {// 外层物品
        for (var j = 1 ; j <= n ;j++) {// 内层背包
            if (j-i*i >=0) {
                dp[j] = Math.min(dp[j],dp[j-i*i]+1)
            }
            
        }
    }

    return dp[n]
}
// @lc code=end

