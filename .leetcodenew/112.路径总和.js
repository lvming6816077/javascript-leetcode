/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    if (root && root.left == null && root.right == null) {
        return targetSum == root.val
    }
    if (root == null) return false

    return hasPathSum(root.left,targetSum-root.val)||
    hasPathSum(root.right,targetSum-root.val)
};

var hasPathSum = function(root, targetSum) {
    if (root == null) return false
    if (root.left == null && root.right == null) {
        return targetSum == root.val
    }
    return hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum-root.val)
};
var hasPathSum = function(root, targetSum) {
    if (root == null) return false
    if (root.left == null && root.right == null) {
        return targetSum == root.val
    }

    return hasPathSum(root.left,targetSum-root.val) ||hasPathSum(root.right,targetSum-root.val)
}
var hasPathSumhasPathSum = function(root, targetSum) {
    var flag = false
    var back = function(_root,target){
        if (_root == null) {
            return
        }


        if (_root.left == null && _root.right == null) {
            if (target == _root.val) {
                flag = true
            }
        }

        back(_root.left,target-_root.val)
        back(_root.right,target-_root.val)


    }

    back(root,targetSum)

    return flag
};
// @lc code=end

