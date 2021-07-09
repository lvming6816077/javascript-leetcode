/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var s = num.toString()
    var res = 0
    for (var i = 0 ; i < s.length ; i++) {
        res = res + parseInt(s[i])
    }
    if (res > 9) {
        return addDigits(res)
    } else {
        return res
    }
};
// @lc code=end

