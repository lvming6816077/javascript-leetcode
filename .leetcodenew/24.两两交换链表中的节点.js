/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (head == null || head.next == null) return head

    var temp = head.next
    head.next = swapPairs(temp.next)
    temp.next = head
    return temp
};
var swapPairs = function(head) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next !== null && temp.next.next !== null) {
        const node1 = temp.next;
        const node2 = temp.next.next;
        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
    }
    return dummyHead.next;
};

var swapPairs = function(head) {
    var headfirst = new ListNode(0)
    headfirst.next = head

    var temp = headfirst

    while(temp.next && temp.next.next) {
        var node1 = temp.next
        var node2 = temp.next.next

        temp.next = node2
        node1.next = node2.next
        node2.next = node1

        
        temp = node1
    }

    return headfirst.next
};

// @lc code=end

