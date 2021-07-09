/*
 * @lc app=leetcode.cn id=1448 lang=javascript
 *
 * [1448] 统计二叉树中好节点的数目
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
 * @return {number}
 */
var goodNodes = function(root) {
    var count = 0
    var loop = function(_root,currentmax) {
        if (_root == null) return
        if (_root.val >= currentmax) {
            count++
        }
        loop(_root.left,Math.max(_root.val,currentmax))
        loop(_root.right,Math.max(_root.val,currentmax))
    }
    if (root == null) {
        return null
    }
    loop(root,-Number.MAX_SAFE_INTEGER)

    return count
};
// @lc code=end

