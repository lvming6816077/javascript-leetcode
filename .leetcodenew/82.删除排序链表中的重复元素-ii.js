/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
    let node = new ListNode(999)
    node.next = head
    let cur = node
    let set = new Set()
    while(cur && cur.next){
        if (cur.val === cur.next.val){
            set.add(cur.val)
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    cur = node
    while(cur && cur.next){
        if (set.has(cur.next.val)){
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return node.next
};
// @lc code=end

