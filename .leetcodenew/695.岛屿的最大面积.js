/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var m = grid.length
    var n = grid[0].length

    var res = 0
    var dfs = function(i,j){
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == '22' || grid[i][j] == '0') {
            return 0
        }

        grid[i][j] = '22'


        var count = 1
        count = count + dfs(i-1,j)
        count = count + dfs(i,j-1)
        count = count + dfs(i+1,j)
        count = count + dfs(i,j+1)

        return count
    }
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ;  j < n ; j++) {
 
            if (grid[i][j] == '1') {
                
                res = Math.max(dfs(i,j),res)

            }
        }
    }

    return res
};
var maxAreaOfIsland = function(grid) {
    var res = 0
    var area = 1
    var bfs = function(i,j){
        var queue = []
        queue.push([i,j,1])
        visited[i][j] = true
        area = 1
        while (queue.length) {
            var cur = queue.shift()
            


            

            for (var dir of dirs) {
                var nx = cur[0] + dir[0]
                var ny = cur[1] + dir[1]

                if (nx >=0 && nx < m && ny >=0 && ny < n && grid[nx][ny] == 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true
                    area++
                    queue.push([nx,ny])
                }
            }
            
        }

        res = Math.max(res,area)

    }
    var dirs = [[-1,0],[1,0],[0,-1],[0,1]]

    var m = grid.length
    var n = grid[0].length
    var visited = new Array(m).fill('').map(d=>new Array(n).fill(false))
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            if (grid[i][j] == 1&&!visited[i][j]) {

                bfs(i,j)
                
            }
        }
    }

    return res
}
// @lc code=end

