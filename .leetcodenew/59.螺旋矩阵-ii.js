/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let count = 1;
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let column = left; column <= right; column++) {
            matrix[top][column] = count;
            count++;
        }
        for (let row = top + 1; row <= bottom; row++) {
            matrix[row][right] = count;
            count++;
        }
        if (left < right && top < bottom) {
            for (let column = right - 1; column > left; column--) {
                matrix[bottom][column] = count;
                count++;
            }
            for (let row = bottom; row > top; row--) {
                matrix[row][left] = count;
                count++;
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return matrix;
};

var generateMatrix = function(n) {
    var matrix = new Array(n).fill('').map(d=>new Array(n).fill(0))
    var left = 0, right = n-1,top = 0,bottom = n-1
    var count = 1;
    while(left <= right && top<=bottom) {
        // 从左往右
        for (var i = left ; i <= right ; i++) {
            matrix[top][i] = count
            count++
        }
        // 从上往下
        for (var j = top+1 ; j <= bottom ; j++) {
            matrix[j][right] = count
            count++
        }
        // 从右往左
        for (var i = right-1 ; i >=left ; i--) {
            matrix[bottom][i] = count
            count++
        }
        // 从下往上
        for (var j = bottom-1 ; j>top ; j--) {
            matrix[j][left] = count
            count++
        }

        // 进入内层下一次循环
        left++;
        right--;
        top++;
        bottom--;
    }

    return matrix
}
var generateMatrix = function(n) {
    var matrix = new Array(n).fill('').map(d=>new Array(n).fill(0))
    var top = 0 , bottom = n-1,left = 0,right = n-1
    var count = 1;
    while(left <= right && top <= bottom) {
        // 从左往右
        for (var i = left ; i <= right ; i++) {
            matrix[top][i] = count
            count++
        }
        // 从上往下
        for (var j = top+1 ; j <= bottom ; j++) {
            matrix[j][right] = count
            count++
        }
        // 从右往左
        for (var i = right-1 ; i >=left ; i--) {
            matrix[bottom][i] = count
            count++
        }
        // 从下往上
        for (var j = bottom-1 ; j>top ; j--) {
            matrix[j][left] = count
            count++
        }

        left++
        top++
        right--
        bottom--
    }

    return matrix
}
// @lc code=end

