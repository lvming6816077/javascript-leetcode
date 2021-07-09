/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */

var pathSum = function(root, targetSum) {
    if (root == null) return 0
    var count = calc(root,targetSum)
    var sum1 = pathSum(root.left,targetSum)
    var sum2 = pathSum(root.right,targetSum)
    


    return sum1 + sum2 + count
};
var calc = function(root,targetSum) {
    if (root == null) return 0
    var flag = 0
    if (targetSum == root.val) {
        flag = 1
    }

    var leftSum = calc(root.left,targetSum-root.val)
    var rightSum = calc(root.right,targetSum-root.val)

    return flag + leftSum + rightSum
}
var subarraySum = function(nums,targetSum) {
    var pre = [0]
    var sum = 0
    var map = new Map()
    var flag = false
    for (var i = 0 ; i < nums.length ; i++) {
        sum = sum + nums[i]
        pre.push(sum)
    }

    for (var i = 0 ; i < pre.length ; i++) {
        if (map.has(pre[i]-targetSum)) {
            flag = true
        }
        map.set(pre[i],true)
    }
    console.log(flag)
    return flag
}
var maxSlidingWindow = function(nums,targetSum) {

    for (var i = 0 ; i < nums.length ; i++) {
        var arr = [nums[i]]
        if (sum(arr) == targetSum) {
            return arr
        }
        for (var j = i+1 ; j < nums.length ; j++) {
            arr.push(nums[j])
            if (sum(arr) == targetSum) {
                return arr
            }
        }
    }

    return []
};
var sum = function(nums){
    var sum = 0;
    for (var i = 0; i < nums.length; i++)
    {
        sum += nums[i];
    }
    return sum;
}
// @lc code=end

