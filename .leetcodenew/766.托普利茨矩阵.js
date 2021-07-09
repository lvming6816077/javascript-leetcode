/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    var m = matrix.length
    var n = matrix[0].length

    for (var i = 0 ; i < m-1 ; i++) {
        for (var j = 0 ; j < n-1 ; j++) {

            if (matrix[i][j] != matrix[i+1][j+1]) {
                return false
            }
        }
    }

    return true
};
// @lc code=end

