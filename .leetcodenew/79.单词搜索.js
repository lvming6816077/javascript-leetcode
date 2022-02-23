/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    var row = board.length;            //获取行数；
    var col = board[0].length;         //获取列数；


    var used = new Array(row).fill('').map(d=>new Array(col).fill(0))
    var bfs = function(_i,_j,index){

        if (_i >= row || _i < 0 || _j >= col || _j < 0 || board[_i][_j] != word[index] || used[_i][_j] == 1) {
            return false
        }

        if (index == word.length-1) {
            return true
        }

        // 当前点已经访问过
        used[_i][_j] = 1
        var res = bfs(_i+1,_j,index+1)||bfs(_i,_j+1,index+1)||bfs(_i-1,_j,index+1)||bfs(_i,_j-1,index+1)
        used[_i][_j] = 0

        return res
    }
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {

            if (bfs(i, j, 0)) {
                return true;
            }
        }
    }


    return false;
}
var exist = function(board, word) {
    var m = board.length;            //获取行数；
    var n = board[0].length;         //获取列数；


    var visited = new Array(m).fill('').map(d=>new Array(n).fill(false))
    var bfs = function(i,j,index){

        if (i < 0 || i>=m || j <0 || j >=n || visited[i][j] || word[index] != board[i][j]) {
            return false
        }



        if (index == word.length-1) {
            return true
        }

        visited[i][j] = true

        var res =bfs(i+1,j,index+1)||bfs(i,j+1,index+1)||bfs(i-1,j,index+1)||bfs(i,j-1,index+1)
        visited[i][j] = false

        return res

    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {

            if (bfs(i, j, 0)) {
                return true;
            }
        }
    }


    return false;
}

var exist = function(board, word) {
    var m = board.length
    var n = board[0].length
    var visited = new Array(m).fill('').map(d=>new Array(n).fill(false))
    var dfs = function(i,j,index) {
        if (i <0 || i >=m || j <0 || j>=n || word[index] != board[i][j] || visited[i][j]) {
            return false
        }

        if (index == word.length-1) {
            return true
        }

        visited[i][j] = true

        var res =dfs(i+1,j,index+1)||dfs(i,j+1,index+1)||dfs(i-1,j,index+1)||dfs(i,j-1,index+1)
        visited[i][j] = false

        return res


    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {

            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }


    return false;
};
var exist = function(board, word) {
    var m = board.length
    var n = board[0].length
    var visited = new Array(m).fill('').map(d=>new Array(n).fill(false))
    var bfs = function(i,j,index) {
        if (i <0 || i >=m || j <0 || j>=n || word[index] != board[i][j] || visited[i][j]) {
            return false
        }

        if (index == word.length-1) {
            return true
        }

        var dirs = [[-1,0],[1,0],[0,-1],[0,1]]

        visited[i][j] = true
        for (var dir of dirs) {
            var nx = i+dir[0]
            var ny = j+dir[1]
            
            if (nx >=0 && nx < m && ny >=0 && ny <n) {
                
                let ret = bfs(nx,ny,index+1)
                
                if (ret) {
                    return true
                }


            }
            
            
        }
        visited[i][j] = false

        return false

    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {

            if (bfs(i, j, 0)) {
                return true;
            }
        }
    }


    return false;
};

// @lc code=end

