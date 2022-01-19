/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @return {number[]}
 */

var postorder = function(root) {
    var res = []
    var loop = function(_root){
        if (_root == null) return
        var c = _root.children||[]
        for (var i = 0 ; i < c.length ; i++) {
            loop(c[i])
        }
        res.push(_root.val)
    }
    loop(root)
    
    return res
};
// @lc code=end

