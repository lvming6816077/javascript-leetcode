/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow1 = function(s, t) {
    if (t.length > s.length) return ''
    if (t == s) return s
    var flag = false
    var map = {}
    var res = s
    var missingType = 0
    for (var c of t) {
        if (!map[c]) {
            map[c] = 1
            missingType++
        } else {
            map[c]++
        }
    }

    var left = 0,right = 0,len = s.length
    while (right < len) {
        var r = s[right]
        right++
        var full = 0
        if (map.hasOwnProperty(r)) {
            map[r]--
        }

        if (map[r] == 0) {
            missingType--
        }


        
        while (missingType == 0) {
            
            var str = s.substring(left,right-1)
            flag = true
            if (str.length < res.length) {
                res = str
                
            }

            var l = s[left]
            left++
            if (map.hasOwnProperty(l)) {
                map[l]++

            }
            if (map[l] > 0) {
                missingType++
            }
            



        }
        
    }
    if (flag == false) return ''
    return res
};
var minWindow = function(s, t) {
    if (t.length > s.length) return ''
    if (t == s) return s
    var flag = false
    var map = {}
    var missingType = 0
    var res = s
    for (var c of t) {
        if (!map[c]) {
            map[c] = 1
            missingType++
        } else {
            map[c]++
        }
    }

    var left = 0,right = 0

    while(right < s.length) {
        var r = s[right]
        right++
        

        if (map[r] != undefined) {
            map[r]--
        }

        if (map[r] == 0) {
            missingType--
        }

        while(missingType == 0) {
            flag = true
            if (right - left < res.length) {
                res = s.substring(left,right)
            }


            var l = s[left]
            left++


            map[l]++
            if (map[l] > 0) {
                missingType++
            }
        }
    }

    return !flag ? '' : res
}
// @lc code=end

