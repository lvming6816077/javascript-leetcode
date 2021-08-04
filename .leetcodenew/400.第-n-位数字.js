/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {

    if (n <= 9) return n
    var str = n.toString()
    var len = str.length
    var pre = (10*(len-1))-1
    var cha = n-pre
    var str2 = (Math.floor(cha/len)||1) + pre

    var yu = cha%len

    return str2.toString().split('').reverse()[yu]
};
var findNthDigit = function (n) {
    if (n < 10) return n
    var tmp = n - 9 // 用来计算在step位数中的第几位
    var step = 2 // 用来计算是几位数
    var len = 10 // 辅助计算几位数
    var sum = 9 + step * len * 9
    while (n > sum) { // 循环计算几位数的同时减去之前的位数在tmp中的占比
        tmp -= step * len * 9
        step++
        len *= 10
        sum += step * len * 9
    }
    var tail = tmp % step // 得出n在对应的数中第几位
    tmp = Math.ceil(tmp / step) - 1 // 除去step就是代表在step位数中的第几位了
    tmp += Math.pow(10, step - 1) // step位 + 1，得到真正对应的数
    var res = String(tmp)
    // 输出处理
    if (tail == 0) return Number(res[res.length - 1])
    else return Number(res[tail - 1])
};

var verifyPostorder = function(postorder) {
    if (postorder.length <= 1) return true
    var check = function(i,j) {
        if (i >= j) return true

        var right_root = i
        while (postorder[right_root] < postorder[j]) {
            right_root++
        }

        var temp = right_root

        while (temp < j) {
            if (postorder[temp] < postorder[j]) {
                return false
            }

            temp++
        }

        return check(i,right_root-1) && check(right_root,j-1)
        
    }

    return check(0,postorder.length-1)

};
// 输入: [1,6,3,2,5]
// 输出: false
// 示例 2：
// [5, 2, 3, 6, 1]

// [5, 6, 2, 3, 1]
// 输出: true
var verifyPostorder = function(postorder) {
    var arr = []
    var root = Number.MAX_SAFE_INTEGER

    for (var i = postorder.length-1;i>=0;i--){
        if (postorder[i] > root) return false

        while (arr.length && arr[arr.length-1] > postorder[i]) {
            root = arr.pop()
        }

        arr.push(postorder[i])
    }

    return true
}




// @lc code=end

