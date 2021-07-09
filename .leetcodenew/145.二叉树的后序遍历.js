/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {

    var arr = []
    arr.push(root)

    var res = []

    while(arr.length) {
        var temp = arr.pop()
        if (!temp) break

        res.unshift(temp.val)
        if(temp.left) {
            arr.push(temp.left)
        }

        if(temp.right) {
            arr.push(temp.right)
        }

    }

    return res
    

};
// @lc code=end

