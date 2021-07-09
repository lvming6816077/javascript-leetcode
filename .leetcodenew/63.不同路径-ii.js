/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] == 1) return 0
    var m = obstacleGrid.length
    var n = obstacleGrid[0].length
    var dp = new Array(m).fill('').map(item=>new Array(n).fill(0))
   
    for (var i = 0 ; i < m ; i++) {

        for (var j = 0 ; j < n ; j++) {

            if(obstacleGrid[i][j]==1){
                dp[i][j]=0;
            }else{
                if(i==0 && j==0) dp[i][j]=1;
                else if(i==0) dp[i][j]=dp[i][j-1];
                else if(j==0) dp[i][j]=dp[i-1][j];
                else dp[i][j]=dp[i-1][j]+dp[i][j-1];
            }


            
            
        }
    }

    return dp[m-1][n-1]
};
// @lc code=end

