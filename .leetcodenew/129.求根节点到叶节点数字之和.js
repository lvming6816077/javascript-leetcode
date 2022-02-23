/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function(root) {
    if (root == null) return 0
    var res = 0
    var dfs = function(_root,temp){
        if (_root == null) return
        temp.push(_root.val)
        if (_root.left == null && _root.right == null) {
            res = res + Number(temp.join(''))
        }
        
        if (_root.left) {
            dfs(_root.left, temp)
        }
        if (_root.right) {
            dfs(_root.right, temp)
        }
        temp.pop()
    }

    dfs(root,[])

    return res
};
// @lc code=end

