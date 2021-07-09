/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    var arr = preorder.split(',')
    var stack = []

    for (var i = 0 ; i < arr.length ; i++) {
        stack.push(arr[i])

        while(stack[stack.length - 1] == '#' && stack[stack.length - 2] == '#') {
            // #出
            stack.pop()
            stack.pop()
            stack[stack.length - 1] = '#'
        }
    }

    return stack.length == 1 && stack[0] == '#'
};
// @lc code=end

