/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = new Map()
    for (var i = 0 ; i < s.length ; i++) {
        var key = s[i]
        if (map.has(key)) {
            map.set(key,map.get(key)+1)
        } else {
            map.set(key,1)
        }
    }

    for (var [k,v] of map) {
        if (v == 1) {
            return s.indexOf(k)
        }
    }

    return -1

    
};
// @lc code=end

