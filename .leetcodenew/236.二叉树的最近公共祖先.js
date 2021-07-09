/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) return root
    if (root == p || root == q) return root // 遍历到p节点或者q节点就不在往下遍历了


    var left = lowestCommonAncestor(root.left,p,q)
    var right = lowestCommonAncestor(root.right,p,q)

    if (left == null && right == null) {
        return null
    }

    if (left == null && right != null) {
        return right
    }
    if (left != null && right == null) {
        return left
    }

    return root

};

var lowestCommonAncestor = function(root, p, q) {

    if (root == null) return null
    if (root == p || root == q) return root

    var left = lowestCommonAncestor(root.left,p,q)
    var right = lowestCommonAncestor(root.right,p,q)

    if (left == null && right == null) return null

    if (left == null && right != null) return right

    if (left != null && right == null) return left

    return root
}
// @lc code=end

