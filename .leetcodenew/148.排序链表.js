/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
    if (head == null) return null
    var cur = head
    var arr = []
    while(cur) {
        arr.push(cur.val)
        cur = cur.next
    }

    arr.sort((a,b)=>a-b)

    
    var h = new ListNode(arr[0])
    var _h = h
    for (var i = 0 ; i < arr.length-1 ; i++) {
        _h.val = arr[i]
        _h.next = new ListNode(arr[i+1])
        _h = _h.next
    }
    // console.log(h)
    return h
};
var sortList = function(head) {
    if(head==null || head.next==null) return head;
    var slow = head
    var fast = head.next

    while(fast && fast.next) {
        
        slow = slow.next
        fast = fast.next.next
    }
    var temp = slow.next
    slow.next = null

    var l1 = sortList(head)
    var l2 = sortList(temp)


    return mergeTwoLists(l1,l2)
};
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
// @lc code=end

