/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root == null) return null
    if (root.val < key) {
        root.right = deleteNode(root.right,key) // 去右子树删除
    } else if (root.val > key) {
        root.left = deleteNode(root.left,key)// 去左子树删除
    } else {// 当前节点就是要删除的节点
        if (root.left == null) return root.right// 情况1，欲删除节点无左子
        if (root.right == null) return root.left// 情况2，欲删除节点无右子

        // 情况3，欲删除节点左右子都有 
        var tempright = root.right

        // 找到当前节点最左边的节点
        while(tempright.left) {
            tempright = tempright.left
        }

        // 将当前节点的左子树赋值给最左边的节点左子树
        tempright.left = root.left
        // 当前节点变为其右子树
        root = root.right
    }

    return root
};
// @lc code=end

