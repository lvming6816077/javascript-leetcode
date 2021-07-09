/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    var arr = []
    arr.push(root)
    var res = []
    while(arr.length) {
        var temp = arr.pop()
        if (!temp) break
        res.push(temp)

        if (temp.right) {
            arr.push(temp.right)
        }
        if (temp.left) {
            arr.push(temp.left)
        }
    }

    for (var i = 1 ; i < res.length ; i++) {
        var cur = res[i-1]
        cur.right = res[i]
        cur.left = null
        
    }
};
var flatten = function(root) {
    var arr = []
    arr.push(root)
    var res = []

    while(arr.length) {
        var temp = arr.pop()
        if (!temp) break

        res.push(temp)

        if (temp.right) {
            arr.push(temp.right)
        }
        if (temp.left) {
            arr.push(temp.left)
        }

    }

    for (var i = 1 ; i < res.length ; i++) {
        var cur = res[i-1]
        cur.right = res[i]
        cur.left = null
    }
};
// @lc code=end

