/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function(head) {
    var fast = head
    var slow = head
    while(fast&& fast.next && slow) {
        fast = fast.next.next
        slow = slow.next

        if (fast == slow) {
            return true
        }
    }
    return false
};
var hasCycle = function(head) {
    var map = new Map()
    var fast = head
    while(fast) {
        if (map.has(fast)) {
            return true
        }
        map.set(fast,true)
        fast = fast.next

    }
    return false
};
// @lc code=end

