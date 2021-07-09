/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.trim().split(' ')
    var last = arr[arr.length-1]
    if (last.trim().length == 0) return 0
    return last.length
};
// @lc code=end

