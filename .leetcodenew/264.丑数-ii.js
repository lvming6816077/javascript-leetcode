/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {

    var dp = new Array(n+1)
    dp[0] = 1
    dp[1] = 1
    var p1 = 1,p2 = 1,p3 = 1;
    for (var i = 2 ; i <= n ; i++) {
        var num2 = dp[p1] * 2, num3 = dp[p2] * 3, num5 = dp[p3] * 5;
        dp[i] = Math.min(num5,Math.min(num2,num3))
        if (dp[i] == num2) {
            p1++
        }
        if (dp[i] == num3) {
            p2++
        }
        if (dp[i] == num5) {
            p3++
        }
    }


    return dp[n]
};
var isUgly = function(n) {
    if (n <= 0) {
        return false;
    }
    var factors = [2, 3, 5];
    for (var i = 0 ; i < factors.length ; i++) {
        while (n % factors[i] === 0) {
            n = n / factors[i];
        }
    }
    return n == 1;
};
var add = function(a, b) {
    if (b == 0) return 
    var ta = a^b
    var tb = a&b<<1
    var res = add(ta,tb)
    return res
};
// @lc code=end

