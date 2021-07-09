/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    if (root == null) return null
    var sum = 0
    var loop = function(_root){
        if (_root == null) return
        loop(_root.right)
        sum = sum + _root.val
        _root.val = sum
        loop(_root.left)

        return _root
    }

    return loop(root)
};
// @lc code=end

