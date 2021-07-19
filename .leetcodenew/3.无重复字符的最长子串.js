/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var map = {}
    var left = 0,right = 0;
    var len = s.length
    var res = 0
    while(right < len) {
        var r = s[right]
        right++

        if (!map[r]) {
            map[r] = 1
        } else {
            map[r]++
        }

        while(map[r] > 1) {
            var l = s[left]
            left++
            map[l]--
            

        }
        res = Math.max(res,right-left)
    }

    return res
};
var lengthOfLongestSubstring = function(s) {
    var left = 0,right = 0

    var map = {}

    var res = 0
    while(right < s.length) {
        var r = s[right]
        
        if (map[r]) {
            map[r]++
        } else {
            map[r] = 1
        }


        while(map[r] > 1) {
            var l = s[left]
            left++
            map[l]--
        }

        res = Math.max(right+1-left,res)
        right++

    }

    return res
}
// @lc code=end

