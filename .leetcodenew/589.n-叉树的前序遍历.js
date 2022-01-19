/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    var res = []
    var loop = function(_root){
        if (_root == null) return
        var c = _root.children||[]
        res.push(_root.val)

        for (var i = 0 ; i < c.length ; i++) {
            loop(c[i])
        }
    }
    loop(root)
    
    return res
};
// @lc code=end

