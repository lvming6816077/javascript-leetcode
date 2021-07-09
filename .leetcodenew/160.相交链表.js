/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var curA = headA
    var curB = headB
    var map = new Map()
    while (curA) {
        map.set(curA,curA)
        curA = curA.next
    }

    while (curB) {
        if (map.has(curB)) return curB
        curB = curB.next
    }

    return null
    
};
var getIntersectionNode1 = function(headA, headB) {
    if (headA == null || headB == null) return null
    var curA = headA
    var curB = headB

    while (curA != curB) {
        
        if (curA == null) {
            curA = headB
        } else{
            curA = curA.next
        }



        if (curB == null) {
            curB = headA
        } else {
            curB = curB.next
        }
    }

    return curA

}
// @lc code=end

