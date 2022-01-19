/*
 * @lc app=leetcode.cn id=1162 lang=javascript
 *
 * [1162] 地图分析
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    // dfs不行
    var m = grid.length
    var n = grid[0].length
    var visited = new Array(m).fill('').map(d=>new Array(n).fill(false))
    var dis = 0

    var dfs = function(cur,i,j){
        if (i < 0 || i >= m || j < 0 || j >= n||visited[i][j]) {
            return
        }

        if (grid[i][j] == 1) {
            console.log(Math.abs(i-cur.i),Math.abs(j-cur.j))
            dis = Math.max(dis,Math.max(Math.abs(i-cur.i),Math.abs(j-cur.j)))
            return
        }

        visited[i][j] = true

        dfs(cur,i+1,j)
        dfs(cur,i,j+1)
        dfs(cur,i-1,j)
        dfs(cur,i,j-1)
    }

    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            if (grid[i][j] == 0) {
                dfs({i,j},i,j)
            }
        }
    }

    return dis
};
var maxDistance = function(grid) {
    var m = grid.length
    var n = grid[0].length
    var visited = new Array(m).fill('').map(d=>new Array(n).fill(false))
    var queue = []
    for (var i = 0 ; i < m ; i++) {
        for (var j = 0 ; j < n ; j++) {
            if (grid[i][j] == 1) {
                queue.unshift({i,j,step:0})
            }
        }
    }

    var dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    var last = null
    var hasOcean = false
    while(queue.length) {
        var cur = queue.pop()
        last = cur

        for (var dir of dirs) {
            var nx = dir[0] + cur.i
            var ny = dir[1] + cur.j

            if (nx >= 0 && nx < m && ny >=0 && ny < n && !visited[nx][ny] && grid[nx][ny] == 0) {
                queue.unshift({i:nx,j:ny,step:cur.step+1})
                visited[nx][ny] = true
                hasOcean = true
            
            }

            
        }
    }

    // 没有陆地或者没有海洋，返回-1。
    if (last == null || !hasOcean) {
        return -1;
    }
    return last.step
}
// @lc code=end

