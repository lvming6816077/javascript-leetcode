/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    var res = []
    var makeres = function(arr){
        var matrix = new Array(n).fill('').map(d=>new Array(n).fill('.'))
        for (var i = 0 ; i < arr.length ; i++) {
            matrix[i][arr[i]] = 'Q'
        }
        var res = []

        for (var i = 0 ; i < matrix.length ; i++) {
            res.push(matrix[i].join(''))
        }
        return res
    }
    var back = function(a, cur) {
        if (cur == a.length) {

            // console.log(a.join(',')); 
            res.push(makeres(a.slice()))
            return; 
        }
        for (var i = 0; i < a.length; i++) {
            a[cur] = i;
            var flag = true;
            for (var j = 0; j < cur; j++) {
                var ab = i - a[j];
                if (a[j] == i || Math.abs(ab) == cur - j) {
                     flag = false; 
                     break
                };
            };
            if (flag) {
                back(a, cur + 1); 
            }
        };
    };
    back(new Array(n).fill(1), 0);



    return res

};
// @lc code=end

