/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (root == null || subRoot == null) return false

    if(isSametree(root,subRoot)) return true

    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
};

var isSametree = function(p,q) {
    if (p == null && q != null) return false
    if (p != null && q == null) return false
    if (p == null && q == null) return true
    if (p.val != q.val) return false

    return isSametree(p.left,q.left)&&isSametree(p.right,q.right)
}
// @lc code=end

