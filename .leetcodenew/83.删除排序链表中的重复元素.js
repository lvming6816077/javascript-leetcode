/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    var temp = head
    while (temp && temp.next) {
        if (temp.val == temp.next.val) {
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
        
    }
    return head
};


var deleteDuplicates = function(head) {
    var temp = head
    while(temp && temp.next) {
        if (temp.val == temp.next.val) {
            temp.val = temp.next.val
            temp.next = temp.next.next
        } else {
            temp = temp.next
        }
    }

    return head

};
var deleteDuplicates = function(head) {
    var _deleteDuplicates = function(head) {
        if (head == null) return head
        if (head.next == null) return head
        var last = deleteDuplicates(head.next)
    
        if (head.val == head.next.val) {
            head.val = head.next.val
            head.next = head.next.next
        }
        return last
    };
    var cur = head
    _deleteDuplicates(cur)

    return cur
};
// @lc code=end

