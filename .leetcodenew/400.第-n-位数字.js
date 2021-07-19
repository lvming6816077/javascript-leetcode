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
var firstUniqChar = function(s) {
    if (!s) return ' '
    var map = {}
    for (var i = 0 ; i < s.length ; i++) {
        var key = s[i]
        if (!map[key]) {
            map[key] = 1
        } else {
            map[key] ++
        }
    }

    for (var key in map) {
        if (map[key] == 1) {
            return key
        }
    }

    return ' '
};



// @lc code=end

