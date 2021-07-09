/*
 * @lc app=leetcode.cn id=130 lang=javascript
 *
 * [130] 被围绕的区域
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // board = [["X","X","X","X"],["X","O","O","X"],["X","O","O","X"],["X","O","X","X"]]
    var dfs = function(_i,_j){
        var f = _i<0||_i>=m||_j<0||_j>=n
        if (f||board[_i][_j] =='a' || board[_i][_j] =='X') {
            return
        }
        board[_i][_j] = 'a'
        

        dfs(_i+1,_j)
        dfs(_i,_j+1)
        dfs(_i-1,_j)
        dfs(_i,_j-1)

    }
    var m = board.length
    var n = board[0].length
    for (var i = 0 ; i < m-0; i++) {
        for (var j = 0 ; j < n-0 ; j++) {
            var isEd = i == 0 || j == 0 || i==m-1 || j==n-1
            if (isEd && board[i][j] == 'O') {
                dfs(i,j)
            }
            
        }
    }
    // console.log(board)
    for (var i = 0 ; i < m; i++) {
        for (var j = 0 ; j < n ; j++) {

            if ('O' == board[i][j]){
                board[i][j] = 'X';
            }
            else if ('a' == board[i][j]){
                board[i][j] = 'O';
            }


            
        }
    }
    return board
};
// @lc code=end

