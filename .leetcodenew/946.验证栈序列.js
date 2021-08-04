/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    var arr = []
    for (var i = 0 ; i < pushed.length ; i++) {
        arr.push(pushed[i])
        while (arr[arr.length-1] == popped[0] && arr.length && popped.length) {
            popped.shift()
            arr.pop()
        }
    }

    return arr.length == 0 && popped.length==0
};
// @lc code=end

