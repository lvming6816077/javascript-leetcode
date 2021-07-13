/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0,right = height.length-1
    var area = 0
    while(left < right) {
        var h = Math.min(height[left],height[right])
        area = Math.max((right-left)*h,area)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return area
};
// @lc code=end

