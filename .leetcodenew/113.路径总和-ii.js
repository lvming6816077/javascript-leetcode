/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    var res = []
    var hasPathSum = function(_root,_targetSum){
        if (_root == null) {
            return false
        }

        if (_root.left == null && _root.right == null) {
            return _root.val == _targetSum
        }

        return hasPathSum(_root.left,_targetSum-_root.val) || hasPathSum(_root.right,_targetSum-_root.val)
    }

    return hasPathSum(root, targetSum)
};
var pathSum = function(root, targetSum) {
    var res = []
    var dfs = function(_root,temp,_targetSum){
        if (_root == null) return
        temp.push(_root.val)
        if (_root.left == null && _root.right == null) {

            if (_targetSum == _root.val) {
                res.push(temp.slice())
            }
        }
        
        if (_root.left) {
            dfs(_root.left,temp,_targetSum-_root.val)
        }
        if (_root.right) {
            dfs(_root.right,temp,_targetSum-_root.val)
        }
        temp.pop()

    }
    dfs(root,[],targetSum)
    


    return res
};
var pathSum = function(root, targetSum) {
    var res = []
    var dfs = function(_root,temp,_targetSum){
        if (_root == null) return
        temp.push(_root.val)
        if (_root.left == null && _root.right == null) {
            if (_targetSum == _root.val) {
                res.push(temp.slice())
            }
        }

        if (_root.left) {
            dfs(_root.left,temp,_targetSum-_root.val)
        }
        if (_root.right) {
            dfs(_root.right,temp,_targetSum-_root.val)
        }

        temp.pop()
    }

    dfs(root,[],targetSum)

    return res
}
// @lc code=end

