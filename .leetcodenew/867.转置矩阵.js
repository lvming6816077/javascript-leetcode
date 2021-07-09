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
    
    var m = matrix.length
    var n = matrix[0].length
    var map = {}
    
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            if (map[i+''+j]) continue
            var temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
            map[j+''+i] = true

        }
    }
    console.log(map)
    return matrix
};
var transpose = function(matrix) {
    
    var m = matrix.length
    var n = matrix[0].length
    var vis = new Array(n).fill('').map(d=>new Array(m).fill(0))
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            var temp = matrix[i][j]

            vis[j][i] = temp

        }
    }

    return vis
};
// @lc code=end

