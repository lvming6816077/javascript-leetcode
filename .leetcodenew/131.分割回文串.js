/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var res = []
    var back = function(temp,str){

        if (str.length == 0) {
            res.push(temp.slice())
            return
        }
        
        for (var i = 1 ; i <= str.length ; i++) {
            var pre = str.substr(0, i);
            if (check(pre)) {
                temp.push(pre)
                back(temp,str.substr(i))
                temp.pop()
            }

        }
    }

    back([],s)

    // console.log(res)

    return res
};
var check = function(str) {
    if (str.length == 1) return true
    var mid = parseInt(str.length/2)
    for (var i = 0 ; i < mid ; i++) {
        if (str[i] != str[str.length-1-i]) {
            return false
        }
    }

    return true
}
// @lc code=end

