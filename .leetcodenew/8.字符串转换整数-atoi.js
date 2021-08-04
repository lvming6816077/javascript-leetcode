/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // s = '+-12'
    s = s.trim()
    var first = s[0]
    if (!/^(\d|\-|\+)$/.test(first)) return 0
    var plus = s[0] == '-' ? '-':'+'
    if (first == '-'||first == '+') {
        s = s.substr(1)
    }
    var str = ''

    if (!/^(\d)$/.test(s[0])) return 0
    for (var c of s) {
        if (!/^(\d)$/.test(c)) {

            break
        } else {
            str = str + c
        }
    }

    var res = Number(plus+str)

    if (res < Math.pow(-2,31)) {
        return Math.pow(-2,31)
    }
    if (res > (Math.pow(2,31)-1)) {
        return (Math.pow(2,31)-1)
    }

    return res
};
var treeToDoublyList = function(root) {
    var arr = []
    var res = []
    while (arr.length || root) {
        if (root) {
            arr.push(root)
            root = root.left
        } else {
            var temp = arr.pop()
            res.push(temp.val)
            root = temp.right
        }
    }
    var head = null
    for (var i = 0 ; i < res.length ;i++) {
        if (i == 0) {
            res[i].left = res[res.length-1]
            res[i].right = res[i+1]
            head = res[i]
        }
        else if (i == res.length-1) {
            res[i].left = res[i-1]
            res[i].right = res[0]
        } else {
            res[i].left = res[i-1]
            res[i].right = res[i+1]
        }

    }


    return head
};
// @lc code=end

