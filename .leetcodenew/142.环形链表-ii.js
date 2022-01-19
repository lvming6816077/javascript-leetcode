/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
    var fast = head
    var slow = head
    var entre = head

    while (fast && fast.next && slow) {
        fast = fast.next.next
        slow = slow.next

        if (fast == slow) {
            // nodelength(slow,fast)

            while(entre != slow) {
                entre = entre.next
                slow = slow.next
            }

            return entre
            
        }
    }




    return null
};
var nodelength = function(p1, p2){
    var count = 0

    do{
        
        p2 = p2.next;
        count++;
    }
    while ( (p1 != p2) ) 
    console.log('环链表长度'+count)
    return count
}
var detectCycle1 = function(head) {
    var map = new Map()
    var fast = head
    while(fast) {
        if (map.has(fast)) {
            return fast
        }
        map.set(fast,true)
        fast = fast.next

    }
    return null
};
// @lc code=end

