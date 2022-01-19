/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
    var dp = triangle;
    for(var i = dp.length-2;i >= 0;i--){
        for(var j = 0;j < dp[i].length;j++){
            dp[i][j] = Math.min(dp[i+1][j],dp[i+1][j+1]) + dp[i][j];
        }
    }
    return dp[0][0];
};


var minimumTotal1 = function(triangle) {
    var memo = new Array(triangle.length).fill('').map(d=>new Array(triangle.length).fill(null))
    var dps = function(i,j){
        if (i == triangle.length) {
            return 0;
        }
        if (memo[i][j] != null) {
            return memo[i][j]
        } else {
            var res = Math.min(dps(i+1,j),dps(i+1,j+1))+triangle[i][j]
            memo[i][j] = res
            return res
        }
    }

    return dps(0,0)
}

var minimumTotal = function(triangle) {
    var memo = new Array(triangle.length).fill('').map(d=>new Array(triangle.length).fill(null))
    var dps = function(i,j) {
        if (i == triangle.length) {
            return 0
        }

        if (memo[i][j] != null) {
            return memo[i][j]
        } else {
            var res = triangle[i][j]+Math.min(dps(i+1,j),dps(i+1,j+1))
            memo[i][j] = res

            return res
        }

    }

    return dps(0,0)
}
var minimumTotal = function(triangle) {
    var visited = new Array(triangle.length).fill('').map(d=>new Array(triangle.length).fill(null))

    var dfs = function(i,j,min){

        if (i == triangle.length) {
            return min;
        }
        if (visited[i][j] != null) { // 避免0
            // console.log(visited)
            return visited[i][j]
        }
        let a = dfs(i+1,j,min+triangle[i][j])

        let b = dfs(i+1,j+1,min+triangle[i][j])

        let ab = Math.min(a,b)
        // visited[i][j] = ab-triangle[i][j]
        return ab
    }
    

    return dfs(0,0,0)
}
// @lc code=end

