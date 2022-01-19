/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var dp = new Array(n+1)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for (var i = 3 ; i <= n ; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
};
var climbStairs = function(n) {
    var dp = [1,1]
    for (var i = 2 ; i <= n ; i++) {
        dp[i] = dp[i-1]+dp[i-2]
    }

    return dp[n]
};
var climbStairs = function(n) {
    if (n == 1) return 1
    if (n == 2) return 2

    return climbStairs(n-1)+climbStairs(n-2)
};
var climbStairs = function(n) {
    var memo = {}
    var loop = function(_n) {
        if (memo[_n]) return memo[_n]
        if (_n == 1) return 1
        if (_n == 2) return 2

        var ans = loop(_n-1) + loop(_n-2)

        memo[_n] = ans

        return ans
    }

    return loop(n)
};
// @lc code=end

