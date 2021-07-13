/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var m = board.length
    var n = board[0].length
    for (var i = 0 ; i < m ; i++) {
        var map = new Map()
        for (var j = 0 ; j < n ; j++) {
            
            if (board[i][j] == '.') continue
            var key = board[i][j]

            if (map.has(key)) {
                return false
            } else {
                map.set(key,true)
            }
        }
    }
    for (var i = 0 ; i < m ; i++) {
        var map = new Map()
        for (var j = 0 ; j < n ; j++) {
            if (board[j][i] == '.') continue
            var key = board[j][i]
            if (map.has(key)) {
                return false
            } else {
                map.set(key,true)
            }
            
        }
    }

    for (var i = 0 ; i < m ; i = i + 3) {

        for (var j = 0 ; j < n ; j = j + 3) {
            
            if(check(i,j,board) == false) {
                return false
            }
            
        }
    }

    return true
};

var check = function(mstart,nstart,board){
    var map = new Map()
    for (var i = mstart ; i < mstart+3 ; i ++) {

        for (var j = nstart ; j < nstart+3 ; j ++) {
            
            if (board[i][j] == '.') continue
            var key = board[i][j]
            if (map.has(key)) {
                return false
            } else {
                map.set(key,true)
            }
            
        }
    }

    return true
}
// @lc code=end

