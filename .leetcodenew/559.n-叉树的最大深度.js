/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    var res = 0
    var loop = function(_root,count){
        if (_root == null) return 0
        res = Math.max(res,count)
        var c = _root.children || []
        for (var i = 0 ; i < c.length ; i++) {
            loop(c[i],count+1)
        }
    }
    
    loop(root,1)

    return res
};
// @lc code=end

