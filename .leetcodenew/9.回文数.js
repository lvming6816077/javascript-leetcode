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
    // 特殊情况
    if (x < 0) return false
    if (x == 1) return true

    x = x.toString()

    var mid = parseInt(x.length/2) // 不用遍历全部，只需要遍历到中间元素即可，因为后面的已经比较过了
    for (var i = 0 ; i < mid ; i++) {
        if (x[i] != x[x.length-1-i]) {// 头尾两个元素比较
            return false
        }
    }

    return true
};
// @lc code=end

