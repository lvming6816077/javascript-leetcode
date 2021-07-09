/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix
    var m = this.matrix.length
    var n = this.matrix[0].length
    this.res = new Array(m).fill('').map(d=>new Array(n+1).fill(0))
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            this.res[i][j+1] = this.res[i][j]+this.matrix[i][j]
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {

    var sum = 0;
    for (var i = row1; i <= row2; i++) {
        sum += this.res[i][col2 + 1] - this.res[i][col1];
    }
    return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

