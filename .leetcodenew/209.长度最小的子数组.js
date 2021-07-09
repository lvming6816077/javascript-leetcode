/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // nums.sort((a,b)=>a-b)
    var left = 0,right = 0
    var res = 0
    var a = Number.MAX_SAFE_INTEGER
    while(right < nums.length) {
        var r = nums[right]
        right++
        res = res + r
        while(res >= target) {
            a = Math.min(a,right-left)
            var l = nums[left]
            left++
            res = res - l
            
        }
    }

    return a == Number.MAX_SAFE_INTEGER ? 0 : a
};
var minSubArrayLen = function(target, nums) {
    var left = 0,right = 0
    var sum = 0
    var res = nums.length
    var flag = true
    while(right <  nums.length) {
        var r = nums[right]
        right++
        sum = sum + r
        while(sum >= target) {
            flag = false
            res = Math.min(res,right-left)
            var l = nums[left]
            left++
            sum = sum - l
        }
    }

    return !flag  ? res : 0
}
var minSubArrayLen = function(target, nums) {
    var left = 0,right = 0
    var sum = 0;
    var res = nums.length
    var flag = true
    while(right < nums.length) {
        var r = nums[right]
        right++
        sum = sum + r

        while(sum >= target) {
            flag = false
            res = Math.min(res,right-left)
            var l = nums[left]
            left++
            sum = sum - l


        }
    }
    return !flag  ? res : 0
}
// @lc code=end

