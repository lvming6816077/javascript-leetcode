/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var m = matrix.length
    var n = matrix[0].length
    var _j = 0
    var _i = 0
    var _matrix = new Array(m).fill('').map(d=>new Array(n).fill(''))
    for (var j = 0 ; j < n ; j++) {
        _j = 0
        for (var i = m-1 ; i >=0 ; i--) {
            
            
            _matrix[_i][_j] = matrix[i][j]
            _j++

        }
        _i++
    }

    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            matrix[i][j] = _matrix[i][j]
        }
    }

};
var rotate1 = function(matrix){
    var n = matrix.length
    // 水平翻转
    for (var i = 0; i < Math.floor(n / 2); ++i) {
        for (var j = 0; j < n; ++j) {
           [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j],matrix[i][j]];
        }
    }
    // 主对角线翻转
    for (var i = 0; i < n; ++i) {
        for (var j = 0; j < i; ++j) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]];
        }
    }

}
var swap = function(a,b){
    var temp = a
    a = b
    b = temp
    return [b, a]
}
// @lc code=end

