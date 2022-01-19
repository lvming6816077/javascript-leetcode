/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n < 3) {
        return 1
    }
    if (n == 3) {
        return 2
    }
    var count = n % 3
    var count1 = parseInt(n / 3)

    if (count == 0) {
        return Math.pow(3,count1)
    } else if (count == 1) {
        return Math.pow(3,count1-1)*4
    } else if (count == 2) {
        return Math.pow(3,count1)*2
    }
};
var cuttingRope = function(n) {
    var dp = new Array(n+1).fill(1)
    dp[0] = 1
    dp[1] = 1
    for (var i = 2; i <= n;i++) {
        for (var j = 1 ; j < i ; j++) {
            dp[i] = Math.max(dp[i],Math.max(dp[i-j]*j,(i-j)*j))
        }
    }
    return dp[n]
};
var integerBreak = function(n) {
    if (n < 3) return 1
    if (n == 3) return 2*1

    var mit = n % 3
    var pre = Math.floor(n / 3)

    if (mit == 0) {
        return Math.pow(3,pre)
    } else if (mit == 2) {
        return Math.pow(3,pre) *2
    } else if(mit == 1) {
        return Math.pow(3,pre-1) *4
    }
}
var integerBreak = function(n) {
    if (n == 1) return 1
    if (n == 2) return 1
    if (n == 3) return 2
    var res = 1
    while(n > 4) {
        res = res * 3
        n = n-3
    }

    return res*n
}

// @lc code=end

