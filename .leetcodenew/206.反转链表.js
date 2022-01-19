/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList1 = function(head) {
    var prev = null
    var temp = head
    while(temp) {
        var t = temp.next // 暂存当前节点的next
        temp.next = prev // 将当前节点的next赋值给上一个节点，头节点的话就是null
        prev = temp // 上个节点赋值当前节点便于下次循环
        temp = t // 将暂存的节点赋值给temp，便于下次循环
    }

    return prev
};

var reverseList = function(head) {

    if (head == null) return null
    if (head.next == null) return head 

    var last = reverseList(head.next)

    head.next.next = head
    head.next = null

    return last
};

var reverseList1 = function(head) {
    var prev = null
    while (head) {
        
        var temp = head.next
        head.next = prev

        prev = head

        head = temp
    }

    return prev
}

var reverseList = function(head){
    var prev = null

    while (head) {
        var temp = head.next
        head.next = prev

        prev = head

        head = temp
    }

    return prev
}


// var reverseList = function(head) {
//     var temp = head
//     var prev = null
//     while (temp) {
//         var s = temp.next
//         temp.next = prev
//         prev = temp

//         temp = s
//     }

//     return prev
// }
// var reverseList = function(head) {
//     var cur = head
//     var prev = null

//     while(cur) {
//         var temp = cur.next
//         cur.next = prev
//         prev = cur
//         cur = temp
//     }

//     return prev
// }
var reverseList = function(head) {
    var prev = null
    var cur = head
    while(cur) {
        var temp = cur.next
        cur.next = prev
        prev = cur
        cur = temp
    }

    return prev
}
var reverseList = function(head) {
    var pre = null
    var cur = head

    while(cur) {
        var temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp

    }

    return pre
}
var reverseList = function(head) {
    var res = null
    var dfs = function(_head,pre){
        
        if (_head == null) {
            res = pre
            return
        }

        var temp = _head.next

        _head.next = pre
        dfs(temp,_head)

    }

    dfs(head,null)

    // console.log(res)

    return res
}

// @lc code=end

