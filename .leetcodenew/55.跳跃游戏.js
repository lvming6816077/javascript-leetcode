/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var last = nums[0]
    var len = nums.length
    for (var i = 0 ; i < len ; i++) {
        if (i <= last) {
            last = Math.max(nums[i]+i,last) // 注意这两者要取最大值
        }

        if (last >= nums.length-1) {
            return true
        }
    }

    return false
};
var canJump = function(nums) {
    var last = 0
    for (var i = 0 ; i <nums.length-1 ;i++) {

        last = Math.max(nums[i]+i,last)

        if (last <= i) {
            return false
        }


    }

    return last >= nums.length-1
};



var canJump = function(nums) {
    if (nums[0] == 0 && nums.length == 1) return true
    var last = 0
    for (var i = 0 ; i < nums.length-1 ; i++) {
        last = Math.max(nums[i]+i,last)

        if (last <= i) {
            return false
        }
    }

    return last >= nums.length-1
}

// @lc code=end

