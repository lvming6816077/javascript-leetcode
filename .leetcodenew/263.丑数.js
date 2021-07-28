/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n == 0) return false
    if (n == 1) return true
    if (n % 2 == 0) {
        n = n /2
        return isUgly(n)
    } else if (n % 3 == 0) {
        n = n /3
        return isUgly(n)
    } else if (n % 5 == 0) {
        n = n /5
        return isUgly(n)
    } else {
        return false
    }

};
var isUgly = function(n) {
    if (n <= 0) {
        return false;
    }
    const factors = [2, 3, 5];
    for (var i = 0 ; i < factors.length ; i++) {
        while (n % factors[i] === 0) {
            n = n / factors[i];
        }
    }
    return n == 1;
};


// @lc code=end

