/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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

var map = new Map()
var rob1 = function(root) {
    if (root == null) return 0
    if (map.has(root)) return map.get(root)
    var val = root.val
    if (root.left) {
        val = val + rob(root.left.left)+rob(root.left.right)
    }
    if (root.right) {
        val = val + rob(root.right.left)+ rob(root.right.right)
    }
    var do_ = val
    var notdo_ = rob(root.left) + rob(root.right)
    var res = Math.max(do_,notdo_)
    map.set(root,res)
    return res
};
var rob = function(root) {
    if (map.has(root)) return map.get(root)
    if (root == null) return 0

    var val = root.val
    if (root.left) {
        val = val + rob(root.left.left)+rob(root.left.right)
    }
    if (root.right) {
        val = val + rob(root.right.left)+rob(root.right.right)
    }

    var noval = rob(root.left)+rob(root.right)

    var res = Math.max(val,noval)
    map.set(root,res)
    return res
}
// @lc code=end

