/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList1 = function(head) {
    var cur = head
    var arr = []
    while(cur) {
        arr.push(cur.val)
        cur = cur.next
    }
    var getMin = function(a){
        var min = Math.min(...a)
        return {
            index:a.indexOf(min),
            min:min
        }
    }
    var len = arr.length
    var temp = arr
    var arr1 = []
    for (var i = 0 ; i < len ; i++) {
        var obj = getMin(temp)
        arr1.push(obj.min)
        temp.splice(obj.index,1)
    }
    // console.log(arr1)
    arr = arr1
    
    // for (var i = 0 ; i < arr.length ; i++) {
    //     for (var j = i ; j >0 ; j--) {
    //         if (arr[j] < arr[j-1]) {
    //             var temp = arr[j]
    //             arr[j] = arr[j-1]
    //             arr[j-1] = temp
    //         } else {
    //             break
    //         }
    //     }
    // }

    var res = new ListNode(arr[0])
    var newhead = res
    for (var i = 0 ; i < arr.length-1 ; i++) {
        newhead.val = arr[i]
        newhead.next = new ListNode(arr[i+1])
        newhead = newhead.next
    }

    return res
};
var insertionSortList = function(head) {
    if (head == null || head.next == null) return head

    var dy = new ListNode(null)

    var cur = head

    while(cur) {
        var next = cur.next

        cur.next = null

        var pre = dy

        if (dy.next == null) {
            dy.next = cur
        } else {
            while(pre && pre.next && pre.next.val < cur.val) {
                pre = pre.next
            }
            var temp = pre.next
            pre.next = cur
            pre.next.next = temp
            

        }
        

        cur = next
        // console.log(cur)

        
    }

    return dy.next
}
// @lc code=end

