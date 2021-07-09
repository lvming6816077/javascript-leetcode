/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [[1]]
    for (var i = 1 ; i < numRows ; i++) {
        var arr = []
        for (j = 0 ; j < i+1 ; j++) {
            arr.push((res[i-1][j-1]||0)+(res[i-1][j]||0))
        }
        res.push(arr)
    }

    return res
};
// @lc code=end

