/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    var last = 0
    var end = 0
    var jump = 0
    for (var i = 0 ; i <nums.length-1 ;i++) {

        last = Math.max(nums[i]+i,last)
        if (end == i) { // 每当最大可达距离等于当前下标时，表示跳了一次（等于i=0时表示至少用了一次）
            jump++
            end = last
        }
        
    }

    return jump
};
var canJump = function(nums) {
    var last = 0
    var count = 0
    var end = 0
    for (var i = 0 ; i < nums.length-1 ; i++) {
        last = Math.max(nums[i]+i,last)

        if (end == i) {
            count++
            end = last
        }
    }

    return count
}
// @lc code=end

