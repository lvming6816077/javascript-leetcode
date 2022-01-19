/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    preorder = [0,1,3,7,8,4,9,2,5,6]
    inorder = [7,3,8,1,9,4,0,5,2,6]

    var res = buildTreeDeal(preorder,0,preorder.length-1,inorder,0,inorder.length-1)

    var loop = function(root){
        // 当前节点为空，表示达到了叶子节点
        if (root == null) return
        // 接着找左子树
        loop(root.left)
        // 接着找右子树
        loop(root.right)
    }
    loop(root)
    return res
};
var buildTreeDeal = function(preorder,pstart,pend,inorder,istart,iend){

    if (pstart > pend || istart > iend) return null
    var root = new TreeNode(preorder[pstart])

    var leftIndex = inorder.indexOf(preorder[pstart]) // 默认没有重复元素


    var leftNum = leftIndex-istart-1

    root.left = buildTreeDeal(preorder,pstart+1,pstart+leftNum+1,inorder,istart,leftIndex-1)
    root.right = buildTreeDeal(preorder,pstart+leftNum+2,pend,inorder,leftIndex+1,iend)

    return root
}

var buildTreeDeal = function(preorder,pstart,pend,inorder,istart,iend) {
    if (pstart > pend || istart > iend) {
        return null
    }

    var root = new TreeNode(preorder[pstart])

    var index = inorder.indexOf(preorder[pstart])

    var num = index-1-istart

    root.left = buildTreeDeal(preorder,pstart+1,pstart+1+num,inorder,istart,index-1)
    root.right = buildTreeDeal(preorder,pstart+2+num,pend,inorder,index+1,iend)

    return root
}
// @lc code=end

