/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var d = s.trim()


    return d.split(/\s+/).reverse().join(' ')
};
var reverseWords1 = function(s) {
    var word = ''
    var arr = []
    for (var i = 0 ; i < s.length ; i++) {
        if (s[i] != ' ') {
            word += s[i];
            if (i== s.length-1 || s[i+1] == ' ') {
                arr.push(word)
                word = ''
            }

        }
    }

    // console.log(arr)

    return arr.reverse().join(' ')
}
// @lc code=end

