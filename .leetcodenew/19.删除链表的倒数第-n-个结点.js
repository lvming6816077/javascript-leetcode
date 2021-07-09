/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var fast = head
    var slow = head
    while (n >0) {
        fast = fast.next
        n--
    }
    if (fast == null) {
        return slow.next
    }
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    var delnode = slow.next
    slow.next = delnode.next
    delnode = null

    return head
};

var removeNthFromEnd1 = function(head, n) {
    var fast = head
    var slow = head

    while(n > 0) {
        fast = fast.next
        n--
    }
    if (fast == null) {
        return slow.next
    }

    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }

    slow.next = slow.next.next

    return head
};
// @lc code=end

