/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var m = text1.length
    var n = text2.length
    var dp = new Array(m+1).fill('').map(d=>new Array(n+1).fill(0))
    
    for (var i = 1 ; i <= m ; i++) {

        for (var j = 1 ; j <= n ; j++) {
            
            if (text1[i-1] == text2[j-1]) {
                dp[i][j] = dp[i-1][j-1]+1
                
            } else {
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
    return dp[m][n]
};
var longestCommonSubsequenc1e = function(text1, text2) {
    var dp = new Array(text1.length + 1).fill('').map(d => new Array(text2.length + 1).fill(0))
    dp[0][0] = 0
    console.log(dp)
    for (var i = 1; i <= text1.length; i++)
    {
        for (var j = 1; j <= text2.length; j++)
        {
            if (text1[i - 1] == text2[j - 1])//因为字符串是从0开始的，而dp是从1开始的
            {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else
            {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
            }
        }
    }
    console.log(dp)
    return dp[text1.length][text2.length]
};
// @lc code=end

