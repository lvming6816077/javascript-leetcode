/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    // 此方式适用n*n的矩阵不适用m*n
    var m = matrix.length
    var n = matrix[0].length

    
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < i ; j++) {

            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]

        }
    }

    return matrix
};
var transpose = function(matrix) {
    
    var m = matrix.length
    var n = matrix[0].length
    var vis = new Array(n).fill('').map(d=>new Array(m).fill(0))
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            vis[j][i] = matrix[i][j]
        }
    }

    return vis
};
// @lc code=end

