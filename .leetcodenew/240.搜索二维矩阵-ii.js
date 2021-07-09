/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    var m = matrix.length
    var n = matrix[0].length
    var i = 0
    var j = n-1

    while (i < m && j >=0) {
        if (matrix[i][j] == target) {
            return true
        } else if (matrix[i][j] < target) {
            i++
        } else {
            j--
        }
    }

    return false
    

};
var searchMatrix = function(matrix, target) {

    var m = matrix.length
    var n = matrix[0].length

    var shorterDim = Math.min(m, n);
    var binarySearch = function(arr){
        var left = 0,right = arr.length-1
        while (left <= right) {
            var mid = Math.floor(left + (right -left)/2)

            if (arr[mid] == target) {
                return true
            } else if (arr[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        
        return false
        
    }
    for (var i = 0; i < m; i++) {
        if (binarySearch(matrix[i])) {
            return true
        }
    }

    



    return false
}
// @lc code=end

