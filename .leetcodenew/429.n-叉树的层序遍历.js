/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    var arr = []
    arr.push(root)
    var res = []
    while(arr.length) {
        var floor = []

        var len = arr.length

        while(len--) {
            var temp = arr.shift()
            if (!temp) break
            
            floor.push(temp.val)

            for (var i = 0 ; i < temp.children.length ; i++) {
                if (temp.children[i]) arr.push(temp.children[i])
            }
        }

        res.push(floor)
    }

    return res
};
// @lc code=end

