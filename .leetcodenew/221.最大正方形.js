/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    // matrix = [["0","1"],["0","1"]]
    var m = matrix.length
    var n = matrix[0].length
    var res = 0

    var dfs = function(x,y,len){

        if (!jug(x,y,len)) {
            return
        }


        
        res = Math.max(res,len*len)
        dfs(x,y,len+1)
    }
    var jug = function(x,y,len){
        
        if (x + len > m || y + len > n) {
            return false
        }


        for(var i=x;i<x+len;i++){
            for(var j=y;j<y+len;j++){
                if(matrix[i][j]=='0'){
                    return false;
                }
            }
        }
        return true
    }
    for (var i = 0; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            if (matrix[i][j] == '1') {

                dfs(i,j,1)
            }
        }
    }

    return res
};
var maximalSquare1 = function(matrix) {
    var m = matrix.length
    var n = matrix[0].length
    let maxSideLength = 0 // 相当于纪录保持者
    let dp = new Array(m).fill(0).map(d=>new Array(n).fill(0))

    for (let i = 0; i < m; i++) {
       // dp二维数组，每一项初始化0
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === '1') {
          if (i === 0 || j === 0) { // base case
            dp[i][j] = 1 // 第一列和第一行的dp值只能为1
          } else { // 递推通式，求出dp[i][j]
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
          }
          maxSideLength = Math.max(maxSideLength, dp[i][j]) //挑战纪录保持者，试图更新
        }
      }
    }
    return maxSideLength * maxSideLength // 边长的平方
};
var maximalSquare = function(matrix) {
    // matrix = [["0","1"],["0","1"]]
    var m = matrix.length,n = matrix[0].length
    if (m == 1 && n == 1 && matrix[0][0] == 1) return 1
    var res = 0
    var judge = function(x,y,s) {
        if (x+s > m || y + s >n) {
            return false
        }

        for (var i = x ; i < x + s ; i++) {
            for (var j = y ; j < y + s ; j++) {
                if (matrix[i][j] == '0') {
                    return false
                }
            }
        }

        return true
    }
    var dfs = function(i,j,s) {
        if (!judge(i,j,s)) return

        res = Math.max(res,s*s)

        dfs(i,j,s+1)
    }

    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            if (matrix[i][j] == 1) {
                dfs(i,j,1)
            }
        }
    }

    return res
}
var maximalSquare = function(matrix) {
    var m = matrix.length,n = matrix[0].length
    var dp = new Array(m).fill(0).map(d=>new Array(n).fill(0))
    var res = 0
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            if (matrix[i][j] == 1) {
                if (i ==0 || j==0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1
                }

                res = Math.max(res,dp[i][j]*dp[i][j])
            }
        }
    }

    return res
}
// @lc code=end

