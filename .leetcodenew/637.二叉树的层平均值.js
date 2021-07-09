/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
    var arr = []
    arr.push(root)
    var res = []
    while(arr.length) {
        var len = arr.length
        var floor = []
        while(len) {
            var temp = arr.shift()
            floor.push(temp.val)
            if (temp.left) {
                arr.push(temp.left)
            }
            if (temp.right) {
                arr.push(temp.right)
            }
            len--
        }

        res.push(parseFloat(floor.reduce((pre,cur)=>{
            return pre + cur
        })/floor.length))
    }

    return res
};
// @lc code=end

