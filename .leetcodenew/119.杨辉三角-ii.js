/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    return generate(rowIndex+1)
};
var generate = function(numRows) {
    var res = [[1]]
    for (var i = 1 ; i < numRows ; i++) {
        var arr = []
        for (j = 0 ; j < i+1 ; j++) {
            arr.push((res[i-1][j-1]||0)+(res[i-1][j]||0))
        }
        res.push(arr)
    }

    return res[numRows-1]
};
// @lc code=end

