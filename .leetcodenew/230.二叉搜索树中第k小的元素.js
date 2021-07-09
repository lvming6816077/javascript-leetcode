/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var arr = []
    var res = []
    var count = 0
    while(arr.length || root) {
        if (root) {
            arr.push(root)
            root = root.left
        } else {
            var temp = arr.pop()
            if (count == k-1) {
                return temp.val
            }

            count++
            root = temp.right
        }
    }

    return null
};
var kthSmallest = function(root, k) {
    var arr = []
    var res = []
    var count = 0;
    while(arr.length || root) {

        if (root) {
            arr.push(root)
            root = root.left
        } else {
            var temp = arr.pop()
            if (count == k-1) {
                return temp.val
            }
            count++
            root = temp.right
        }
    }

    return null
}
// @lc code=end

