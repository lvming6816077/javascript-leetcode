/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = []
    var back = function(left,right,temp) {
        if (temp.length == n*2) {
            res.push(temp.join(''))
            return
        }

        if (left <= n) {
            temp.push('(')
            back(left+1,right,temp)
            temp.pop()
        }
        if (right < left) {
            temp.push(')')
            back(left,right+1,temp)
            temp.pop()
        }
    }

    back(1,1,[])

    return res
};
// @lc code=end

