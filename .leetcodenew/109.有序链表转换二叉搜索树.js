/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    var cur = head
    var nums = []
    while(cur) {
        nums.push(cur.val)
        cur = cur.next
    }

    return sortedArrayToBST(nums)
};
function buildBST(nums, start, end) {
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
    var res = buildBST(nums,0,nums.length-1);

    return res // 递归的入口
};
// @lc code=end

