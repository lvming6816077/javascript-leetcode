/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var arr = []
    arr.push(root)
    var res = []
    while (arr.length) {
        var temp = arr.pop()
        if (!temp) break

        res.push(temp.val)

        if (temp.right) {
            arr.push(temp.right)
        }

        if (temp.left) {
            arr.push(temp.left)
        }
        
    }

    return res
};
var preorderTraversal = function(root) {
    var res = []
    var loop = function(root) {
        if (root == null) return
        res.push(root.val)
        loop(root.left)
        loop(root.right)
    }

    loop(root)

    return res
}
var preorderTraversal = function(root) {
    var res = [],arr = [root]
    while(arr.length) {
        var temp = arr.pop()
        if (!temp) break
        
        res.push(temp.val)

        if (temp.right) {
            arr.push(temp.right)
        }
        if (temp.left) {
            arr.push(temp.left)
        }
    }

    return res
}
// @lc code=end

