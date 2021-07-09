/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
    var check = function(left,right){
        if (left == null && right == null) {
            return true
        }

        if (left && right) {
            return left.val == right.val && check(left.left,right.right)&& check(left.right,right.left)
        }

        return false
    }

    if (root == null)
    {     // 如果传入的root就是null，对称
        return true;
    }

    return check(root.left,root.right)
};

var isSymmetric = function(root) {
    var check = function(left,right){
        if (left == null) {
            return right == null
        }
        if (right == null) {
            return false
        }

        if (left.val != right.val) {
            return false
        }

        return check(left.left,right.right) && check(left.right,right.left)
    }

    if (root == null)
    {     // 如果传入的root就是null，对称
        return true;
    }

    return check(root.left,root.right)
};

var isSymmetric = function(root) {
    var check = function(left,right){
        if (left == null) {
            return right == null
        }
        if (right == null) {
            return false
        }

        if (left.val != right.val) {
            return false
        }

        return check(left.left,right.right) && check(left.right,right.left)
    }

    if (root == null)
    {     // 如果传入的root就是null，对称
        return true;
    }

    return check(root.left,root.right)
}
// @lc code=end

