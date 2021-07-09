/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @return {ListNode}
 */
var middleNode = function(head) {
    var temp = head
    var temp2 = head
    var count = 0
    while(temp) {
        temp = temp.next
        count++
    }
    var mid  = parseInt(count /2)+1

    var count1 = 1
    while(temp2) {
        if (count1 == mid) {
            return temp2
        }
        temp2 = temp2.next
        count1++
    }
};
var middleNode = function(head) {
    var fast = head
    var slow = head

    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
};
// @lc code=end

