/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var flag = true
    var pre = null
    var check = function(_root) {
        if (_root == null) return 
        check(_root.left)
        if (pre == null) {
            pre = _root.val
        } else {
            // console.log(pre, _root.val)
            if (pre >= _root.val) {
                flag = false
            }
            pre = _root.val
        }
        

        check(_root.right)
    }
    check(root)

    return flag
};

var isValidBST = function(root) {
    var arr = []
    var res = []

    while (arr.length || root) {

        if (root) {
            arr.push(root)
            root = root.left
        } else {
            var temp = arr.pop()

            if (res.length == 0) {
                res.push(temp.val)
            } else {
                if (res[res.length-1] >= temp.val) {
                    return false
                }
                res.push(temp.val)
            }

            root = temp.right

        }
    }

    return true

}
// @lc code=end

