/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var res = []
    var n = matrix.length
    var m = matrix[0].length
    
    let left = 0, right = m - 1, top = 0, bottom = n - 1;
    while (left <= right && top <= bottom) {
        for (let column = left; column <= right; column++) {

            res.push(matrix[top][column])
        }
        for (let row = top + 1; row <= bottom; row++) {

            res.push(matrix[row][right])

        }
        if (left < right && top < bottom) {
            for (let column = right - 1; column > left; column--) {

                res.push(matrix[bottom][column])

            }
            for (let row = bottom; row > top; row--) {

                res.push(matrix[row][left])
            }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return res;
};
var spiralOrder = function(matrix) {
    var m = matrix.length
    var n = matrix[0].length

    var left = 0,right = n-1,top = 0,bottom = m-1
    var res = []

    while (left <= right && top <= bottom) {
        for (var i = left ; i <= right ; i++) {
            res.push(matrix[top][i])
        }

        for (var i = top+1 ; i <= bottom ; i++) {
            res.push(matrix[i][right])
        }

        if (left < right && top < bottom) {
        for (var i = right-1 ; i > left ; i--) {

            res.push(matrix[bottom][i])
        }

        for (var i = bottom ; i > top ; i--) {
            res.push(matrix[i][left])
        }
    }


        left++;
        right--;
        top++;
        bottom--;


    }

    return res
}
var findContinuousSequence = function(target) {
    var sum = function(arr){
        if (arr.length == 0) return 0
        return arr.reduce((pre,cur)=>pre+cur)
    }
    var left = 1,right = 1
    var res = []

    while (right <= target) {


        
        if (sum(res) < target) {
            res.push(right)
            right++
        } else if (sum(res) < target) {
            res.shift()
            left++
        } else {
            console.log(res)
        }
        


    }

    return []
};
// @lc code=end

