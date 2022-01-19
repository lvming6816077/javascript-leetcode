/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k <= 1) return 0;
    var left = 0,right = 0
    var cur = 1

    // var mu = function(arr){
    //     return arr.reduce((pre,cur)=>pre*cur)
    // }
    var count = 0

    while(right < nums.length) {
        var r = nums[right]
        right++
        cur = cur * r
        
        while(cur >= k) {
            cur = cur / nums[left]
            left++
        }
        
        count = right-left + count
        
    }

    return Math.max(0,count)
};
// @lc code=end

