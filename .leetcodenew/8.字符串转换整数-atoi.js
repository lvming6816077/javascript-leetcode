/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // s = '+-12'
    s = s.trim()
    var first = s[0]
    if (!/^(\d|\-|\+)$/.test(first)) return 0
    var plus = s[0] == '-' ? '-':'+'
    if (first == '-'||first == '+') {
        s = s.substr(1)
    }
    var str = ''

    if (!/^(\d)$/.test(s[0])) return 0
    for (var c of s) {
        if (!/^(\d)$/.test(c)) {

            break
        } else {
            str = str + c
        }
    }

    var res = Number(plus+str)

    if (res < Math.pow(-2,31)) {
        return Math.pow(-2,31)
    }
    if (res > (Math.pow(2,31)-1)) {
        return (Math.pow(2,31)-1)
    }

    return res
};
// @lc code=end

