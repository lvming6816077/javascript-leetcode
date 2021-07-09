/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x == 0) return 0
    var now = Math.abs(x).toString().split('').reverse('').join('')
    now = parseInt(now.replace(/^0*/,''))
    var res =  x < 0 ? -now : now

    if (res < -Math.pow(2,31)) {
        return 0
    }
    if (res > Math.pow(2,31)) {
        return 0
    }

    return res
};
var reverse = function(x) {
    if (x == 0) return 0

    var val = Math.abs(x).toString().split('').reverse('').join('')

    val = parseInt(val.replace(/^0*/,''))

    var res = x < 0 ? -val : val
    if (res < -Math.pow(2,31)) {
        return 0
    }
    if (res > Math.pow(2,31)) {
        return 0
    }

    return res
};
// @lc code=end

