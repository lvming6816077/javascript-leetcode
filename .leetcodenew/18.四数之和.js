/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b)
    var res = []
    var hash = {}
    for (var i = 0 ; i < nums.length ; i++) {
        for (var j = i+1 ; j < nums.length ; j++) {
            var left = j+1
            var right = nums.length - 1
            while(left < right) {
                var mid = []
                if (nums[left] + nums[right] + nums[j]+nums[i]< target) {
                    left++
                } else if (nums[left] + nums[right] + nums[j]+nums[i] > target) {
                    right--
                } else {
                    mid.push(nums[i])
                    mid.push(nums[j])
                    mid.push(nums[left])
                    mid.push(nums[right])
                    if (hash[mid.join()]) {
                        
                    } else {
                        hash[mid.join()] = true
                        res.push(mid)
                    }
    
                    left++
                    right--
                }
            }
        }

    }
    return res
};
// @lc code=end

