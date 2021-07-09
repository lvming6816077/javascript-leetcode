/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 var isBalanced = function(root) {
     if (root == null) return true
     var flagleft = isBalanced(root.left)
     var flagright = isBalanced(root.right)

     var deepleft = maxD(root.left)

     var deepright = maxD(root.right)

     return flagleft && flagright && Math.abs(deepleft-deepright) < 2
 }


var isBalanced = function(root) {
    if (root == null) return true



    var isdepth = function(_root) {
        if (_root == null) return 0;
        var left = isdepth(_root.left);
        if (left == -1) return -1;
        var right = isdepth(_root.right);
        if (right == -1) return -1;
        return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
    }

    return isdepth(root) != -1
};

var maxD = function(root) {
    if (root == null) return 0

    return Math.max(maxD(root.left),maxD(root.right)) +1
}
var minD = function(root) {
    if (root == null) return 0
    var left = root.left
    var right = root.right
    if (left) {
        return minD(left)+1
    }
    if (right) {
        return minD(right)+1
    }
    return Math.min(minD(root.left),minD(root.right)) +1
}
// @lc code=end

