/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var dp = new Array(m).fill('').map(item=>new Array(n).fill(0))

    for (var i = 0 ; i < m ; i++) {

        for (var j = 0 ; j < n ; j++) {

            if(i==0 && j==0) dp[i][j]=1;
            else if(i==0) dp[i][j]=dp[i][j-1];
            else if(j==0) dp[i][j]=dp[i-1][j];
            else dp[i][j]=dp[i-1][j]+dp[i][j-1];
            
            
        }
    }

    return dp[m-1][n-1]
};
// @lc code=end

