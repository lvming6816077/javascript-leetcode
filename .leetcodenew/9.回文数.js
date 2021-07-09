/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x == 1) return true

    x = x.toString()

    var mid = parseInt(x.length/2)
    for (var i = 0 ; i < mid ; i++) {
        if (x[i] != x[x.length-1-i]) {
            return false
        }
    }

    return true
};
// @lc code=end

