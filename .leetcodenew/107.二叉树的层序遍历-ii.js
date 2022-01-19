/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (root == null) return []
    var arr = []
    arr.unshift(root)
    var res = []
    while (arr.length) {
        var len = arr.length
        var floor = []
        while (len) {
            var temp = arr.pop()
            if (!temp) break
            floor.push(temp.val)
            if (temp.left) {
                arr.unshift(temp.left)
            }
            if (temp.right) {
                arr.unshift(temp.right)
            }
            len--
        }

        res.push(floor)
    }

    return res.reverse()
};
// @lc code=end

