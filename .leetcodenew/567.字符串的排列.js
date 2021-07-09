/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    var map = new Map()


    for (let c of s1) {
        if (!map.has(c)) {
            map.set(c,1)
        } else {
            map.set(c,map.get(c)+1)
        }
    }

    var left = 0,right = 0

    var arr = []

    while(right < s2.length) {
        var r = s2[right]
        right++

        arr.push(r)
        while(right - left == s1.length) {
            var maptemp = new Map()
            arr.forEach(item=>{
                if (!maptemp.has(item)) {
                    maptemp.set(item,1)
                } else {
                    maptemp.set(item,maptemp.get(item)+1)
                }
            })
            // console.log(maptemp,map)
            var flag = true
            maptemp.forEach(function(value, key) {
                if (map.get(key) != value) {
                    flag = false
                }

            })
            if (maptemp.size == map.size && flag) {
                return true
            }

            arr.shift()
            left++

            
        }
        
    }

    return false
};
// @lc code=end

