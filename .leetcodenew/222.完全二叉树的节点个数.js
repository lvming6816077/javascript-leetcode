/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
    if (root == null) return 0
    var arr = []
    arr.push(root)
    var sum = 0
    while(arr.length) {
        var len = arr.length
        var floor = 0
        while(len) {
            var temp = arr.pop()

            floor++

            if (temp.left) {
                arr.push(temp.left)
            }
            if (temp.right) {
                arr.push(temp.right)
            }

            len--
        }
        sum = sum + floor
    }

    return sum
};
var countNodes = function(root) {
    if(root == null) {
        return 0;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
}
// @lc code=end

