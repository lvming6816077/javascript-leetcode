/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var m = matrix.length
    var n = matrix[0].length
    var zarray
    for (var i = 0 ; i < m ; i ++) {
        for (var j = 0 ; j < n ; j++) {
            if (matrix[i][j] == 0) {
                zarray.push(i+''+j)
            }
        }
    }
};
// @lc code=end

