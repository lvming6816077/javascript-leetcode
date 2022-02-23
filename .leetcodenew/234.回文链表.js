/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var cur = head
    var arr = []

    while(cur) {
        arr.push(cur.val)
        cur = cur.next
    }

    // var mid
    for (i = 0 ; i < arr.length ; i++) {
        if(arr[i] != arr[arr.length-1-i]){
            return false
        }
    }

    return true
};
// @lc code=end

