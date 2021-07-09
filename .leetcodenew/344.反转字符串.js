/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // var ss = []
    // for (var i = s.length-1 ; i >= 0 ; i--) {

    //     ss.push(s[i])
    // }

    for (var i = 0 ; i < s.length/2 ; i++) {
        var temp = s[i]
        s[i] = s[s.length-1-i]
        s[s.length-1-i] = temp
    }
};
var reverseString = function(s) {
    for (var i = 0 ; i < s.length/2 ; i++) {
        var temp = s[i]
        s[i] = s[s.length-1-i]
        s[s.length-1-i] = temp
    }
}
// @lc code=end

