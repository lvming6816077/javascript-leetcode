/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

    var arr = path.split('/')
    var stack = []

    for (var i = 0 ; i < arr.length ; i++) {
        if (arr[i] == '..') {
            stack.pop()
        } else if(arr[i] == '.') {
            // do nothing
        } else {
            arr[i] && stack.push('/'+arr[i])
            
        }
    }

    if (stack.length == 0) return '/'
    return stack.join('')
};
// @lc code=end

