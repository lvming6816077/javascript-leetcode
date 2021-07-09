/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var map = new Map()
var cloneGraph = function(node) {
    if (node == null) {
        return node;
    }
    if (map.has(node)) return map.get(node)
    var list = node.neighbors
    var clonenode = new Node(node.val,[])
    map.set(node,clonenode)
    for (var i = 0 ; i < list.length ; i++) {
        clonenode.neighbors.push(cloneGraph(list[i]))
    }
    

    return clonenode
};
// @lc code=end

