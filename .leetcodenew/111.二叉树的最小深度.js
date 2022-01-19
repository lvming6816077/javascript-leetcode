/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {

    if (root == null) {
        return 0
    } else {
        if (root.left == null)
        {
            return minDepth(root.right)+1
        }
        if (root.right == null)
        {
            return minDepth(root.left) + 1
        }
        var left = minDepth(root.left)
        var right = minDepth(root.right)

        return Math.min(left,right)+1

    }
};

var minDepth = function(root) {
    if (root == null) {
        return 0
    } else {
        if (root.left == null) {
            return minDepth(root.right) + 1
        }
        if (root.right == null) {
            return minDepth(root.left) + 1
        }

        return Math.min(minDepth(root.left),minDepth(root.right))+1
    }
}

var minDepth = function(root) {
    if (root == null) return 0
    if (root.left == null) {
        return minDepth(root.right) +1
    }
    if (root.right == null) {
        return minDepth(root.left) + 1
    }

    return Math.min(minDepth(root.left),minDepth(root.right)) + 1
}
// @lc code=end

