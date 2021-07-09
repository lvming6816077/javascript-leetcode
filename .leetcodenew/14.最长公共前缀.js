/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    var prev = strs[0]||''
    for (var i = 1 ; i < strs.length ; i++) {
        var arr = []
        for (var j = 0 ; j < prev.length ; j++) {
            if (strs[i][j] == prev[j] && j < strs[i].length) {
                arr.push(prev[j])
            } else {
                break
            }
        }

        prev = arr.join('')
    }

    return prev
};

var longestCommonPrefix = function(strs) {
    var prev = strs[0]
    
    for (var i = 1 ; i<strs.length ; i++) {
        var arr = []
        for (var j = 0 ; j < prev.length ; j++) {
            
            if (prev[j] == strs[i][j] && j <strs[i].length) {
                arr.push(prev[j])
            } else {
                break
            }
        }

        prev = arr.join('')
    }

    return prev
}
var longestCommonPrefix = function(strs) {
    var prev = strs[0]
    
    for (var i = 1 ; i < strs.length ; i++) {
        var arr = []
        for (var j = 0 ; j < prev.length ; j++) {
            if (strs[i][j] == prev[j] && j < strs[i].length) {
                arr.push(prev[j])
            } else {
                break
            }
        }

        prev = arr.join('')
    }

    return prev
}
var longestCommonPrefix = function(strs) {
    var prev = strs[0]
    for (var i = 1 ; i < strs.length ; i++) {
        var arr = []
        for (var j = 0 ; j < prev.length ; j++) {

            if (strs[i][j] == prev[j] && j < strs[i].length) {
                arr.push(prev[j])
            } else {
                break
            }


        }
        prev = arr.join('')
    }

    return prev
}
// @lc code=end

