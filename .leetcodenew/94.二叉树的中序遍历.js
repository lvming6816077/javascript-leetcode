/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {


    dfs(root,[])
    return []
};

var isSubStructure = function(A, B) {

};
var inorderTraversal = function(root) {
    var res = []
    var arr = []

    while(arr.length || root) {
        if (root) {
            arr.push(root)
            root = root.left
        } else {
            var temp = arr.pop()
            res.push(temp.val)
            root = temp.right
        }
    }

    return res
};


// @lc code=end

