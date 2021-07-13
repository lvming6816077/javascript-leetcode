/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    return buildTreeDeal(inorder,0,inorder.length-1,postorder,0,postorder.length-1)
};

var buildTreeDeal = function(inorder, istart,iend,postorder,pstart,pend) {

    if (istart > iend) return null

    if (pstart > pend) return null
    var root = new TreeNode(postorder[pend])

    var index = inorder.indexOf(postorder[pend])

    var num = index-istart

    root.left = buildTreeDeal(inorder,istart,index-1,postorder,pstart,pstart+num-1)
    root.right = buildTreeDeal(inorder,index+1,iend,postorder,pstart+num,pend-1)
    
    

    return root
}
var buildTree1 = function(inorder, postorder) {
    function helper (inorderStart, inorderEnd, postOrderStart, postOrderEnd) {
        if (postOrderStart > postOrderEnd) {
            return null
        }
        const parentValue = postorder[postOrderEnd]
        const node = new TreeNode(parentValue)
        const indexOfParent = inorder.indexOf(parentValue)

        node.left = helper(inorderStart, indexOfParent - 1, postOrderStart, postOrderStart + indexOfParent - inorderStart - 1)
        node.right = helper(indexOfParent + 1, inorderEnd, postOrderStart + indexOfParent - inorderStart, postOrderEnd - 1)
        return node
    }
    return helper(0, inorder.length - 1, 0, postorder.length - 1)
};

// @lc code=end

