/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-zA-Z]+/ig,'')
    s = s.toLocaleLowerCase()

    for (var i = 0 ; i < parseInt(s.length/2) ; i++) {
        if (s[i] != s[s.length-1-i]) {
            return false
        }
    }

    return true
};
// @lc code=end

