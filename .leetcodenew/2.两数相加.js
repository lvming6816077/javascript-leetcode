/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
var addTwoNumbers = function(l1, l2) {
    var node = new ListNode()
    var head = node
    var head1 = l1
    var head2 = l2
    var arr1 = []
    var arr2 = []
    while(head1) {
        arr1.unshift(head1.val)
        head1 = head1.next
    }
    while(head2) {
        arr2.unshift(head2.val)
        head2 = head2.next
    }

    var res = parseInt(arr1.join(''))+parseInt(arr2.join(''))
    res = res.toString()


    if (res.length == 1) {
        return new ListNode(res[0],null)
    }
    for (var i = res.length-1 ; i > 0 ; i--) {
        head.val = res[i]
        head.next = new ListNode(res[i-1])
        head = head.next
    }

    return node
};
var addTwoNumbers = function(l1, l2) {
    var head1 = l1
    var head2 = l2
    var node = new ListNode()
    var head = node
    var pre = 0
    while(head1 || head2 || pre != 0) {
        var h1val,h2val
        if (head1 == null) {
            h1val = 0
        } else {
            h1val = head1.val
        }
        if (head2 == null) {
            h2val = 0
        } else {
            h2val = head2.val
        }
        var val = h1val+h2val+pre
        if (val > 9) {
            val = val-10
            pre = 1
        } else {
            val = val
            pre = 0
        }

        head.next = new ListNode(val)
        head = head.next

        if (head1) head1 = head1.next
        
        if (head2) head2 = head2.next

    }



    return node.next
};
// @lc code=end

