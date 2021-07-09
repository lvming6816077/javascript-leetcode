/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

 // 滑动窗口
var strStr = function(haystack, needle) {
    // return haystack.indexOf(needle)
    if (needle == '') return 0
    var right = 0
    var arr = []
    while(right < haystack.length) {
        var r = haystack[right]
        right++
        arr.push(r)
        while(arr.length >= needle.length) {
            if (arr.join('') == needle) {

                return right-needle.length// 减去长度表示起始位置
            }
            arr.shift()
        }
    }

    return -1
};
var strStr = function(haystack, needle) {
    if (needle == '') return 0
    var left = 0,right = 0
    var arr = []
    while(right < haystack.length){
        var r = haystack[right]
        right++
        arr.push(r)
        while(arr.length == needle.length) {
            if (arr.join('') == needle) {
                return left
            }


            left++

            arr.shift()

        }
    }

    return -1
}
// @lc code=end

