/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (root == null) return null

    if (root.val < val) {
        return searchBST(root.right,val)
    } else if (root.val > val) {
        return searchBST(root.left,val)
    } else {
        return root
    }

};
var searchBST = function(root, val) {
    if (root == null) return null

    var cur = root
    while(cur) {
        if (cur.val > val) {
            cur = cur.left
        } else if(cur.val < val){
            cur = cur.right
        } else {
            return cur
        }
    }

    return null


};
// @lc code=end

