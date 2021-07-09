/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseLinkedList = function(head) {
    // 也可以使用递归反转一个链表
    var pre = null;
    var cur = head;

    while (cur) {
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre
}

var reverseBetween = function(head, left, right) {
    const dummy_node = new ListNode(-1);
    dummy_node.next = head;

    var pre = dummy_node

    for (var i = 0 ; i < left -1 ; i++) {
        pre = pre.next
    }
    var end = pre.next
    var rightnode = null
    for (var i = 0 ; i < right - left + 1 ; i++) {
        if (i == right - left) {
            rightnode = end.next
            end.next = null
            
            break
        }

        
        end = end.next
    }

    var newf = reverseLinkedList(pre.next)

    pre.next = newf



    var res = pre
    while(res) {
        if (res.next == null) {
            res.next = rightnode
            break
        }
        res = res.next
    }


    return dummy_node.next
};


// @lc code=end

