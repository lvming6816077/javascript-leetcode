/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {}
    for (var i = 0 ; i < nums.length ; i++) {
        if (map[target-nums[i]] !=undefined) {
            return [i,map[target-nums[i]]]
        }

        map[nums[i]] = i
    }
};
var twoSum = function(nums, target) {
    
    for (var i = 0 ; i < nums.length ; i++) {
        for (var j = i+1 ; j < nums.length ; j++) {
            if (nums[i]+nums[j] == target) {
                return [i,j]
            }
        }
    }
};
var twoSum = function(nums, target) {
    
    for (var i = 0 ; i < nums.length ; i++) {
        var arr = nums.slice(i+1)
        for (var j = 0 ; j < arr.length ; j++) {
            if (nums[i]+arr[j] == target) {
                return [i,i+j+1]
            }
        }
    }
};
// @lc code=end

