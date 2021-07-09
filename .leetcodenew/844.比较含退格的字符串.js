/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return compare(s) == compare(t)
};
var compare = function(s){
    var stack = []
    for (var i = 0 ; i < s.length ; i++) {
        if (s[i] == '#') {
            stack.pop()
        } else {
            stack.push(s[i])
        }
        
    }

    return stack.join('')
}
// @lc code=end

