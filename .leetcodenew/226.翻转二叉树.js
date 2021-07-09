/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree1 = function(root) {
    if (root == null) return null

    var temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root

};
var invertTree = function(root) {
    var arr = []
    arr.push(root)



    while(arr.length) {
        var temp = arr.pop()
        if (!temp) break

        var v = temp.left
        temp.left = temp.right
        temp.right = v


        if(temp.right) {
            arr.push(temp.right)
        }

        if(temp.left) {
            arr.push(temp.left)
        }

    }

    return root

};

var invertTree = function(root) {
    var arr = []
    arr.push(root)
    while(arr.length) {
        var temp = arr.pop()
        if (temp == null) break
        var s = temp.left
        temp.left = temp.right
        temp.right = s
        if (temp.right) {
            arr.push(temp.right)
        }

        if (temp.left) {
            arr.push(temp.left)
        }
    }

    return root
}
// @lc code=end

