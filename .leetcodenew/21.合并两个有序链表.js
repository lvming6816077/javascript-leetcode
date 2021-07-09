/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var temp = new ListNode(0,null);
    var cur = temp
    while (l1 && l2) {
        if (l1.val > l2.val) {
            cur.next = l2
            l2 = l2.next
        } else {
            cur.next = l1
            l1 = l1.next
        }

        cur = cur.next
    }

    if (l1 == null) {
        cur.next = l2
    } else {
        cur.next = l1
    }

    return temp.next
};

var mergeTwoLists = function(l1, l2) {
    var cur = new ListNode()
    var newL = cur
    
    while(l1 && l2) {
        if (l1.val > l2.val) {
            newL.next = l2
            l2 = l2.next
        } else {
            newL.next = l1
            l1 = l1.next
        }

        newL = newL.next

    }

    if (l1 == null && l2 != null) {
        newL.next = l2
    }
    if (l2 == null && l1 != null) {
        newL.next = l1
    }

    return cur.next
};
var mergeTwoLists = function(l1, l2) {
    var head = new ListNode()
    var newL = head
    while (l1 && l2) {
        if (l1.val < l2.val) {
            newL.next = l1
            l1 = l1.next
        } else {
            newL.next = l2
            l2 = l2.next
        }

        newL = newL.next


    }
    if (l1 == null) {
        newL.next = l2  
    }
    if (l2 == null) {
        newL.next = l1 
    }

    return head.next
}
// @lc code=end

