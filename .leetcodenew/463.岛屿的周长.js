/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function(grid) {
    var m = grid.length, n = grid[0].length
    var visited = new Array(m).fill('').map(d=>new Array(n).fill(false))
    var s = 0

    var bfs = function(i,j){
        var queue = []
        s = s + 4

        queue.unshift([i,j])
        visited[i][j] = true
        var dirs = [[-1,0],[1,0],[0,-1],[0,1]]

        while(queue.length) {
            var cur = queue.pop()

            for (var dir of dirs) {
                var nx = dir[0] + cur[0]
                var ny = dir[1] + cur[1]
                if (nx >= 0 && ny >=0 && nx < m && ny < n && grid[nx][ny] == 1 && visited[nx][ny] == false) {
                    queue.unshift([nx,ny])
                    visited[nx][ny] = true
                    s = s + 4

                    if (nx > 0 && grid[nx -1][ny] == 1) {
                        s = s - 2
                    }
                    if (ny > 0 && grid[nx][ny-1] == 1) {
                        s = s - 2
                    }
                    // if (nx < m-1 && grid[nx +1][ny] == 1) {
                    //     s = s - 1
                    // }
                    // if (ny < n-1 && grid[nx][ny+1] == 1) {
                    //     s = s - 1
                    // }
                }

            }



        }
    }
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            if (grid[i][j] == 1 && visited[i][j]==false) {
                
                bfs(i,j)
                
            }
        }
    }

    return s
}
var islandPerimeter = function(grid) {
    var m = grid.length, n = grid[0].length
    var s = 0
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0; j < n ; j++) {
            if (grid[i][j] == 1) {
                if (i == 0 || grid[i-1][j] == 0) {
                    s++
                }
                if (j == 0 || grid[i][j-1] == 0) {
                    s++
                }
                if (i == m-1 || grid[i+1][j] == 0) {
                    s++
                }
                if (j == n-1 || grid[i][j+1] == 0) {
                    s++
                }
            }
        }
    }

    return s
}
// @lc code=end

