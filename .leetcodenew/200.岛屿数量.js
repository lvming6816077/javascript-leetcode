/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var m = grid.length
    var n = grid[0].length
    var count = 0

    var dfs = function(i,j){
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == '22' || grid[i][j] == '0') {
            return
        }

        grid[i][j] = '22'

        dfs(i-1,j)
        dfs(i,j-1)
        dfs(i+1,j)
        dfs(i,j+1)
    }
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ;  j < n ; j++) {
 
            if (grid[i][j] == '1') {
                dfs(i,j)
                count++;//记录岛屿数量

            }
        }
    }

    return count
};
var numIslands = function(grid) {
    var count = 0
    var dfs = function(i,j) {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 'has' || grid[i][j] == 0) {
            return
        }
        grid[i][j] = 'has'

        dfs(i-1,j)
        dfs(i,j-1)
        dfs(i+1,j)
        dfs(i,j+1)

    }
    var m = grid.length
    var n = grid[0].length
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            if (grid[i][j] == 1) {
                dfs(i,j)
                count++
            }
        }
    }

    return count
}
var numIslands = function(grid) {
    var bfs = function(i,j){
        var queue = []
        queue.push([i,j])
        visited[i][j] = true

        while (queue.length) {
            var cur = queue.shift()

            for (var dir of dirs) {
                var nx = cur[0] + dir[0]
                var ny = cur[1] + dir[1]

                if (nx >=0 && nx < m && ny >=0 && ny < n && grid[nx][ny] == 1 && !visited[nx][ny]) {
                    visited[nx][ny] = true
                    queue.push([nx,ny])
                }
            }
            
        }

    }
    var dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    var count = 0
    var m = grid.length
    var n = grid[0].length
    var visited = new Array(m).fill('').map(d=>new Array(n).fill(false))
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            if (grid[i][j] == 1&&!visited[i][j]) {
                count++
                bfs(i,j)
                
            }
        }
    }

    return count
}

// @lc code=end

