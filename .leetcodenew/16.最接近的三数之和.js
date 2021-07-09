/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b)
    var res = Number.MAX_SAFE_INTEGER
    var f
    for (var i = 0 ; i < nums.length ; i++) {
        var left = i+1,right = nums.length-1
        while(left < right) {
            var sum = nums[i] + nums[left] + nums[right]
            var mix = Math.abs(target-sum)

            // res = Math.min(res,mix)
            if (mix < res) {
                f = sum
                res = mix
            }
            if (sum > target) {
                right--
            } else if(sum < target) {
                left++
            } else {
                return target
            }
        }
    }

    return f
};
// @lc code=end

