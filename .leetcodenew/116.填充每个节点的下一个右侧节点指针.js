/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root == null) return null
    var arr = []

    arr.push(root)
    root.next = null

    while(arr.length) {
        var len = arr.length
        var floor = []
        while(len) {
            var temp = arr.shift()
            temp.next = arr[0] || null
            floor.push(temp)
            if (temp.left) {
                arr.push(temp.left)
            }
            if (temp.right) {
                arr.push(temp.right)
            }
            len--
        }

        floor[floor.length-1].next = null
    }

    return root
    
};
var connect = function(root) {

    if (root == null || root.left == null) return root

    root.left.next = root.right
    if (root.next) {
        root.right.next = root.next.left
    }
    
    
    connect(root.left)
    connect(root.right)

    return root
}
// @lc code=end

