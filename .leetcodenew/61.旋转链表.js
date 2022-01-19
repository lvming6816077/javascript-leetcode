/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    var temphead = head
    var cur = head
    var res = []

    while(cur) {
        res.push(cur.val)
        cur = cur.next
    }

    k = k % res.length

    while(k > 0) {
        var last = res[res.length-1]
        for (var i = res.length-1 ; i>=0 ; i--) {
            if (i == 0) {
                res[i] = last
            } else {
                res[i] = res[i-1]
            }
            
        }
        k--
    }
    

    for (var i = 0 ; i < res.length ; i++) {
        temphead.val = res[i]
        temphead = temphead.next
    }

    return head
};
var rotateRight = function(head, k) {
    if (head == null) return null
    if (k == 0) return head

    var n = 0
    var cur = head

    while(cur) {
        n++
        cur = cur.next
    }

    return loop(head, k%n)

};

var loop = function(head,k){
    if (k == 0) return head
    var cur = head
    var next = head.next
    

    var first = null

    while(next && cur) {
        if (next.next == null) {

            first = next
            cur.next = null
        }
        next = next.next
        cur = cur.next

    }
    if (first == null) {
        first = head
    } else {
        first.next = head
    }
    
    

    k--

    if (k > 0) {
        return loop(first,k)
    } else {
        return first
    }
}
var rotateRight = function(head, k) {

    var cur = head
    var arr = []
    while(cur) {
        arr.push(cur.val)
        cur = cur.next
    }

    k = k%arr.length

    while(k--) {
        var last = arr[arr.length-1]
        for (var i = arr.length-1; i>=0; i--) {
            if (i == 0) {
                arr[i] = last
            } else {
                arr[i] = arr[i-1]
            }
        }
    }

    var temp = head

    for (var i = 0 ; i < arr.length ; i++) {
        temp.val = arr[i]
        temp = temp.next
    }

    return head

}
// @lc code=end

