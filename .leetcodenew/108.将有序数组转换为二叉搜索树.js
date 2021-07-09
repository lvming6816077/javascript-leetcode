/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

function buildBST1(nums, start, end) {
    if (start > end) { // 构成不了区间
      return null
    }
    const minIndex = Math.floor((start + end) / 2)  
    const root = new TreeNode(nums[minIndex]);
  
    root.left = buildBST(nums, start, minIndex - 1); // 构建左子树 
    root.right = buildBST(nums, minIndex + 1, end); // 构建左子树 
    return root;
}
  
var sortedArrayToBST = function (nums) {
    return buildBST(nums, 0, nums.length - 1); // 递归的入口
};
  

function buildBST(nums, start, end) {
    if (start > end) return null
    var mid = Math.floor(start + (end-start)/2)
    var root = new TreeNode(nums[mid])

    root.left = buildBST(nums,start,mid-1)
    root.right = buildBST(nums,mid+1,end)

    return root
}
// @lc code=end

