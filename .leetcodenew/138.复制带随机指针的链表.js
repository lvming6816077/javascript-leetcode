/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    var n = head
    var count = 0
    while (n) {
        n._index = count
        n = n.next
        count++
    }
    var newhead = new Node()

    var cur = newhead
    
    var map = new Map()
    count = 0
    while (head) {
        var temp = new Node(head.val)
        var random = null
        if (head.random) {
            random =  head.random._index
        }
        temp.random = random

        cur.next = temp
        

        cur = temp
        map.set(count,temp)

        head = head.next
        count++
    }

    var curnew = newhead.next

    while (curnew) {
        if (curnew != null) {
            curnew.random = map.get(curnew.random)
        } else {
            curnew.random = null
        }
        
        curnew = curnew.next
    }

    return newhead.next
};
// @lc code=end

