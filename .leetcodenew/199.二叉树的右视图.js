/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
    // 二叉树的层序遍历

    if (root == null) return []
    var arr = []
    var res = []
    arr.push(root)
    while (arr.length) {
        var len = arr.length
        

        var floor = []

        while (len) {
            var temp = arr.shift()
            if (!temp) break

            floor.push(temp.val)

            if (temp.left) {
                arr.push(temp.left)
            }
            if (temp.right) {
                arr.push(temp.right)
            }
            len--
        }

        res.push(floor[floor.length-1])
    }

    // console.log(res)

    return res

};
// @lc code=end

