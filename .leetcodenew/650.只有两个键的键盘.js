/*
 * @lc app=leetcode.cn id=650 lang=javascript
 *
 * [650] 只有两个键的键盘
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    var res = 0;
    for (var i = 2; i <= n; i++) {
        while (n % i == 0) {
            res += i;
            n /= i;
        }
    }
    return res;
    
};
var minSteps = function(n) {
    var dp = new Array(n+1)
    dp[1] = 0
    dp[0] = 0
    for (var i = 2 ; i <=n ; i++) {
        dp[i] = i
        for (var j = 2 ; j <=i ; j++) {
            if (i % j == 0) {
                dp[i] = dp[j]+dp[i/j]
            }
        }
    }

    return dp[n]
    
};
var minSteps = function(n) {
    var res = 0
    for (var i = 2 ; i <= n ; i++) {
        while (n % i == 0) {// 因式分解
            res += i;
            n /= i;
        }
    }
    return res;
}
var minSteps = function(n) {
    if (n == 1) return 0

    for (var i = 2 ; i <= n ; i++) {
        if (n%i == 0) {
            return minSteps(n/i) + i
        }
    }
    return n;
}
// @lc code=end

