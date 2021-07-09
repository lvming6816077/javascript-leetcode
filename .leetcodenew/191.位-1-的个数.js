/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // return n.toString(2).replace(/0/ig,'').length
    // n = parseInt(n,2)
    var count = 0

    while (n != 0) {
        if (n&1 == 1) {
            count++
        }
        n>>>=1
    }

    return count
};
// @lc code=end

