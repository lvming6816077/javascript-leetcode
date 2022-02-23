/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var dpleft = new Array(height.length).fill(Number.MIN_SAFE_INTEGER)
    var dpright = new Array(height.length).fill(Number.MIN_SAFE_INTEGER)
    // console.log(dpleft,dpright)
    for (var i = 1 ; i < height.length ; i++) {
        dpleft[i] = Math.max(height[i-1],dpleft[i-1])
    }
    for (var i = height.length-2 ; i >=0 ; i--) {
        dpright[i] = Math.max(height[i+1],dpright[i+1])
    }
    
    var res = 0
    for (var i = 0 ; i < height.length ; i++) {
        var h = Math.min(dpleft[i],dpright[i])
        res = res + Math.max(0,h-height[i])
    }

    return res

};
// @lc code=end

